import React from "react";
import { BiRename } from "react-icons/bi";
import { FiFolder, FiShare, FiStar } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const EditActionWidgetCreator = ({ close, actionList = [] }) => {
  const normalBtnStyles =
    "w-full py-3 px-4 bg-transparent text-[#bebbbb] hover:text-white hover:bg-[#181818] flex items-center border-b border-[rgba(190,187,187,0.1)] justify-between";
  const dangerStyles =
    "w-full py-3 px-4 bg-transparent text-red-500  justify-between hover:bg-[#181818] hover:text-white  flex items-center";
  return (
    <div className="absolute flex items-center justify-center z-[100] right-[30px] top-[20px] w-fit">
      <div className="bg-[#272626] rounded-md p-[.4rem_0px] shadow-lg gap-[1rem] transform w-[200px] transition-all duration-300 ease-in-out">
        <div className="w-full">
          {actionList?.map(
            ({ Icon, label, action, color, type, autoClose }, index) => {
              return (
                <button
                  className={type ? dangerStyles : normalBtnStyles}
                  onClick={() => {
                    action();
                    return autoClose && close();
                  }}
                >
                  <span>{label}</span>
                  <span className={`${color && color}`}>
                    <Icon size={22} />
                  </span>
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default EditActionWidgetCreator;
