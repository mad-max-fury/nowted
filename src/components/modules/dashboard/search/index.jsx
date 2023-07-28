import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const SearchInput = ({ close }) => {
  const [showResult, setShowResult] = useState(false);

  const handleFocus = () => {
    setShowResult(true);
  };

  const handleBlur = () => {
    close();
    setShowResult(false);
  };

  const handleSearchClose = () => {
    close();
  };

  return (
    <div className="absolute top-0 right-0 flex w-full">
      {/* search form */}
      <form className="z-10 flex w-full items-center gap-3 bg-[#2c2b2b] p-[0px_9px] text-[#808080] outline-none">
        <span
          className="text-[inherit] cursor-pointer transition-all duration-[0.2s] hover:text-white"
          onClick={handleSearchClose}
        >
          <MdOutlineClose size={25} />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={"off"}
          placeholder="Search for a note..."
          className="text-gray-light w-[calc(100%_-_40px)] h-[60px] !bg-transparent border-0 text-sm font-normal outline-none text-[#f5f5f5]"
        />
      </form>

      {/* result wraps */}
      <ul
        className={`absolute z-[-1] flex max-h-[250px] h-fit w-full list-none flex-col overflow-auto rounded-bl-[1rem] rounded-br-[1rem] bg-[#2c2b2b] p-[1rem_14px] shadow-[0px_4px_22px_rgba(0,_0,_0,_0.8)] gap-[1rem] scrollbar transition-all duration-500 ease-out ${
          showResult ? "top-[calc(100%_+_0.25rem)]" : "-top-[100vh]"
        }`}
      >
        {Array(3)
          .fill(0)
          .map((_, index, array) => (
            <SearchResult
              key={index}
              showBorderBottom={index !== array.length - 1}
            />
          ))}
      </ul>
    </div>
  );
};

const SearchResult = ({ active, callback }) => {
  const handleClick = () => {
    callback();
  };

  return (
    <div
      onClick={handleClick}
      className={`flex h-fit w-full cursor-pointer flex-col items-start gap-[10px] rounded shadow-sm p-[14px] transition-all duration-300 ease-in-out ${
        active
          ? "bg-[rgba(255,_255,_255,_0.1)]"
          : "bg-[rgba(255,_255,_255,_0.03)]"
      } `}
    >
      <h3 className="text-[18px] font-semibold leading-6 text-white">
        My Goals for the Next Year
      </h3>
      <div className="flex items-center">
        <small className="text-base font-normal text-[rgba(255,_255,_255,_0.4)]">
          As the year comes to a ...
        </small>
      </div>
    </div>
  );
};

export default SearchInput;
