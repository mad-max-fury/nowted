import React, { useState } from "react";
import EditNote from "../EditNote";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FiFolder } from "react-icons/fi";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import EditActionWidgetCreator from "./EditActionWidget";
const ViewNote = () => {
  const [showEditActions, setShowEditActions] = useState(false);
  return (
    <div className="flex-col w-full h-screen overflow-y-auto scrollbar">
      <div className="mx-auto flex w-[90%] flex-col gap-[30px] pt-[30px]">
        <div className="flex items-center justify-between w-full ">
          <h3 className="text-[clamp(15px,_5vw,_32px)] font-semibold text-white">
            Reflection on the Month of June
          </h3>
          <div className="relative isolate">
            <button
              type="button"
              title={"view more actions"}
              onClick={() => setShowEditActions(!showEditActions)}
              className="text-[rgba(255,_255,_255,_0.6)] transition-all duration-[0.2s] hover:text-white"
            >
              <IoEllipsisHorizontalCircleOutline size={30} />
            </button>
            {showEditActions && (
              <EditActionWidgetCreator
                close={() => setShowEditActions(false)}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 border-b border-solid border-[rgba(255,_255,_255,_0.1)] pb-6">
            <div className="flex h-fit w-[150px] items-start gap-3 text-[18px] font-semibold text-[rgba(255,_255,_255,_0.6)] ">
              <span>
                <MdOutlineCalendarMonth size={25} />
              </span>
              <h3>Date</h3>
            </div>
            <h3 className="text-white underline">21/06/2022</h3>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <div className="flex h-fit w-[150px] items-start gap-3 text-[18px] font-semibold text-[rgba(255,_255,_255,_0.6)] ">
              <span>
                <FiFolder size={25} />
              </span>
              <h3>Folders</h3>
            </div>
            <h3 className="text-white underline">Personal</h3>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <EditNote />
      </div>
    </div>
  );
};

export default ViewNote;
