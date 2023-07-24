import React, { useState } from "react";
import NotePrev from "./NotePrev";
import MiniEmptyState from "../categoryMaker/emptyState";
import EditActionWidgetCreator from "../viewNote/EditActionWidget";

const NoteList = () => {
  const [active, setActive] = useState(0);
  const [showEditActions, setShowEditActions] = useState(false);
  return (
    <div className="sticky top-0  h-screen w-full xs:max-w-[350px] bg-secondary ">
      <div className="sticky top-0 z-30 px-[20px] pb-[20px] pt-[30px] text-white flex justify-between items-center">
        <h3 className=" text-[clamp(16px,_5vw,_22px)] font-semibold">
          Personal
        </h3>
        <div className="relative isolate">
          <button
            className="flex items-center gap-1 h-[2rem]  mr-4 group"
            title="Edit Folder Actions"
            onClick={() => setShowEditActions(!showEditActions)}
            tabIndex={0}
          >
            {Array(3)
              .fill(0)
              .map((_) => (
                <span className=" h-[7px] w-[7px] rounded-full bg-[rgba(255,_255,_255,_0.6)] transition-all duration-[0.2s] group-hover:bg-white"></span>
              ))}
          </button>
          {showEditActions && (
            <EditActionWidgetCreator close={() => setShowEditActions(false)} />
          )}
        </div>
      </div>
      <div className="scrollbar flex h-[calc(100%_-_6rem)] w-full flex-col gap-4 overflow-x-auto  px-[20px] pt-4">
        {Array(15)
          .fill(0)
          .map((x, i) => (
            <NotePrev active={active === i} callback={() => setActive(i)} />
          )) || <MiniEmptyState />}
      </div>
    </div>
  );
};

export default NoteList;
