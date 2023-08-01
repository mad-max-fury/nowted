import React, { forwardRef, useState } from "react";
import EditNote from "../EditNote";
import { MdDeleteOutline, MdOutlineCalendarMonth } from "react-icons/md";
import { FiFolder, FiShare, FiStar } from "react-icons/fi";
import {
  IoCloseOutline,
  IoEllipsisHorizontalCircleOutline,
} from "react-icons/io5";
import EditActionWidgetCreator from "./EditActionWidget";
import useModalRef from "../../../../hooks/useModalRef";
import { BiRename } from "react-icons/bi";
import RenameModal from "../../../common/modals/renameModal";
import ShareNoteModal from "../../../common/modals/shareModal";
import ConfirmationModal from "../../../common/modals/confirmationModal";
import { FaStar } from "react-icons/fa";
const ViewNote = forwardRef((_, ref) => {
  const [showEditActions, setShowEditActions] = useState(false);
  const [noteName, setNoteName] = useState("Reflection on the Month of June");
  const editNoteRef = useModalRef(ref);
  const [isWidgetOpen, setIsWidgetOpen] = useState({
    rename: false,
    move: false,
    share: false,
    addToFav: false,
    delete: false,
  });

  const handleToggleWidget = (actionType) => {
    return setIsWidgetOpen((prev) => ({
      ...prev,
      [actionType]: !prev[actionType],
    }));
  };
  const handleSave = (newName) => {
    setNoteName(newName);
    return handleToggleWidget("rename");
  };
  const handleClose = () => {
    ref?.current?.closeModal();
  };

  return (
    <>
      <dialog
        ref={editNoteRef}
        className="dialog backdrop:bg-[rgba(0,_0,_0,_0.5)] max-w-[900px]  overflow-y-auto scrollbar h-screen w-full bg-[#2c2b2b] border-none shadow-[0_0_1rem_rgba(0,_0,_0,_0.3)] transition-[all_0.2s_ease-in-out] isolate"
      >
        <div className="mx-auto flex w-[90%] flex-col gap-[30px] pt-[30px]">
          <div className="flex items-center justify-between w-full ">
            <h3 className="text-[clamp(15px,_5vw,_32px)] font-semibold text-white">
              {noteName}
            </h3>
            <span className="flex items-center justify-center gap-4">
              <div className="relative z-50 isolate">
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
                    actionList={[
                      {
                        label: "Rename File",
                        Icon: BiRename,
                        action: () => {
                          return handleToggleWidget("rename");
                        },
                      },
                      {
                        label: "Move Note",
                        Icon: FiFolder,
                        action: () => handleToggleWidget("move"),
                      },
                      {
                        label: "Share Note",
                        Icon: FiShare,
                        action: () => handleToggleWidget("share"),
                      },
                      {
                        label: isWidgetOpen.addToFav
                          ? "Remove from Fav"
                          : "Add to Favourite",
                        autoClose: false,
                        color: isWidgetOpen.addToFav && "text-[goldenrod]",
                        Icon: isWidgetOpen.addToFav ? FaStar : FiStar,
                        action: () => handleToggleWidget("addToFav"),
                      },
                      {
                        label: "Delete",
                        Icon: MdDeleteOutline,
                        type: true,
                        action: () => handleToggleWidget("delete"),
                      },
                    ]}
                    close={() => setShowEditActions(false)}
                  />
                )}
              </div>
              <button
                onClick={handleClose}
                className="text-[rgba(255,_255,_255,_0.6)] p-2 shadow-lg bg-[rgba(255,255,255,0.1)] rounded-md  transition-all duration-[0.2s] hover:text-white"
              >
                <IoCloseOutline size={25} />
              </button>
            </span>
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
        {isWidgetOpen.rename && (
          <RenameModal
            isOpen={isWidgetOpen.rename}
            renameType={"Note"}
            initialName={noteName}
            onSave={handleSave}
            onClose={() => handleToggleWidget("rename")}
          />
        )}
        {isWidgetOpen.share && (
          <ShareNoteModal
            isOpen={isWidgetOpen.share}
            fileName={noteName}
            onConfirm={() => handleToggleWidget("share")}
            onClose={() => handleToggleWidget("share")}
          />
        )}
        {isWidgetOpen.delete && (
          <ConfirmationModal
            heading={"Confirm Delete"}
            message={`taking this action, will temporarily delete
              Reflection on the Month of June
           to trash.`}
            onConfirm={() => handleToggleWidget("delete")}
            onCancel={() => handleToggleWidget("delete")}
          />
        )}
      </dialog>
    </>
  );
});

export default ViewNote;
