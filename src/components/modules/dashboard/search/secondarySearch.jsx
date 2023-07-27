import React, { useRef, useState } from "react";
import { BiSolidGridAlt } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import { styles } from "../../../../utils/configs";
import { useLocation } from "react-router-dom";
import { useGrid } from "../../../../context/showGrid";
const SecondarySearch = ({ handleOpenModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const loc = useLocation();
  const secHeading = loc.pathname.split("/")[3];
  const result =
    loc.pathname.split("/")[2] === undefined
      ? "Recents"
      : loc.pathname.split("/")[2];
  const heading = result.charAt(0).toUpperCase() + result.slice(1);
  const handleChange = (selectedOption) => {
    return setSelectedOption(selectedOption);
  };

  return (
    <>
      {heading === "Settings" ? null : (
        <section className="flex flex-col w-full" style={{}}>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[1.5rem] font-bold text-white ">
              {heading}{" "}
              {secHeading && (
                <span className="font-medium text-[#808080] text-[1rem]">
                  ({secHeading})
                </span>
              )}
            </h1>
            <span className="flex gap-4">
              <ShuffleDisplayTypeListOrGrid />
              <NewNoteCta handleOpenModal={handleOpenModal} />
            </span>
          </div>
          <div className="mt-2 border-b border-solid border-[rgba(255,_255,_255,_0.1)] w-full pb-2">
            <form className="z-10 flex w-full items-center gap-3 bg-transparent text-[#808080] outline-none">
              <span className="text-[inherit] cursor-pointer transition-all duration-[0.2s] hover:text-white">
                <BsSearch size={20} />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a note..."
                className="text-gray-light w-[calc(100%_-_40px)] h-[60px] focus-within:placeholder:text-[rgba(255,255,255,0.1)] !bg-transparent border-0 text-sm font-normal outline-none text-[#f5f5f5]"
                autoComplete="off"
                style={{ backgroundColor: "transparent" }}
              />
              <div className="w-[25%] h-full cursor-pointer">
                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  styles={styles}
                />
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
export default SecondarySearch;

const ShuffleDisplayTypeListOrGrid = () => {
  const { gridFlow, turnOfGrid, turnOnGrid } = useGrid();
  return (
    <div className="flex px-2 h-[35px] items-center relative justify-between bg-[rgba(255,255,255,0.1)] rounded-md">
      <div
        className={`absolute h-[25px] rounded-md my-auto w-[36px] transition-all duration-[0.3s] ease-in-out ${
          gridFlow ? " right-[calc(50%_+_4px)]" : "right-[calc(0%_+_8px)]"
        } bg-[rgba(255,255,255,0.4)] pointer-events-none`}
      ></div>
      <button
        type="button"
        onClick={turnOnGrid}
        className={`h-[25px] w-[36px] flex items-center mr-1 ${
          gridFlow
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(255,255,255,0.5)]"
        } justify-center`}
      >
        <BiSolidGridAlt />
      </button>
      <button
        type="button"
        onClick={turnOfGrid}
        className={`h-[25px] w-[36px] flex items-center ml-1 ${
          !gridFlow
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(255,255,255,0.5)]"
        } justify-center`}
      >
        <IoMenuSharp size={"22px"} className="m-auto" />
      </button>
    </div>
  );
};
const NewNoteCta = ({ handleOpenModal }) => {
  return (
    <button
      onClick={handleOpenModal}
      type="button"
      className="flex items-center gap-2 p-1 px-3 font-semibold text-white rounded-lg bg-[#423fee] "
    >
      <span>
        <AiOutlinePlus size={18} />
      </span>
      <span>New</span>
    </button>
  );
};
