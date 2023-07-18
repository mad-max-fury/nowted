import React from "react";
import { BiRename } from "react-icons/bi";
import { FiFolder, FiShare, FiStar } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const EditActionWidgetCreator = ({ close }) => {
  const handleAction = (action) => {
    close();
    console.log(`Performing action: ${action}`);
  };

  return (
    <div className="absolute flex items-center justify-center z-[100] right-[30px] top-[20px] w-fit">
      <div className="bg-[#272626] rounded-md p-[.4rem_0px] shadow-lg gap-[1rem] transform w-[200px] transition-all duration-300 ease-in-out">
        <div className="w-full">
          <button
            className="w-full py-3 px-4 bg-transparent text-[#bebbbb] hover:text-white hover:bg-[#181818] flex items-center border-b border-[rgba(190,187,187,0.1)] justify-between "
            onClick={() => handleAction("Rename file")}
          >
            <span>Rename File</span>
            <span>
              <BiRename size={22} />
            </span>
          </button>
          <button
            className="w-full py-3 px-4 bg-transparent text-[#bebbbb] hover:text-white hover:bg-[#181818] flex items-center border-b border-[rgba(190,187,187,0.1)] justify-between"
            onClick={() => handleAction("Move note")}
          >
            <span>Move Note</span>
            <span>
              <FiFolder size={22} />
            </span>
          </button>
          <button
            className="w-full py-3 px-4 bg-transparent text-[#bebbbb] hover:text-white hover:bg-[#181818] flex items-center border-b border-[rgba(190,187,187,0.1)] justify-between"
            onClick={() => handleAction("Share note")}
          >
            <span>Share Note</span>
            <span>
              <FiShare size={22} />
            </span>
          </button>
          <button
            className="w-full py-3 px-4 bg-transparent text-[#bebbbb] hover:text-white hover:bg-[#181818] flex items-center border-b border-[rgba(190,187,187,0.1)] justify-between"
            onClick={() => handleAction("Add to Favourite")}
          >
            <span>Add to Favourite</span>
            <span>
              <FiStar size={22} />
            </span>
          </button>
          <button
            className="w-full py-3 px-4 bg-transparent text-red-500  justify-between hover:bg-[#1818181]  flex items-center"
            onClick={() => handleAction("Delete")}
          >
            <span>Delete</span>
            <span>
              <MdDeleteOutline size={22} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditActionWidgetCreator;
