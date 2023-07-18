import React, { useEffect, useRef, forwardRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from "../../../common/input";
import EditNote from "../EditNote";
const CreateNote = forwardRef((_, ref) => {
  const [saving, setSaving] = useState(false);
  const editNoteRef = useRef();

  useEffect(() => {
    const showModal = () => {
      editNoteRef.current.showModal();
    };

    const closeModal = () => {
      editNoteRef.current.close();
    };

    if (ref && typeof ref === "object") {
      ref.current = {
        openModal: showModal,
        closeModal: closeModal,
      };
    }

    return () => {
      closeModal();
    };
  }, [ref]);

  const handleSave = async () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      ref.current.closeModal();
    }, 2000); // Delay for 2000 milliseconds (2 seconds)
  };

  const handleClose = () => {
    ref.current.closeModal();
  };

  return (
    <>
      <dialog
        ref={editNoteRef}
        className="dialog backdrop:bg-[rgba(0,_0,_0,_0.5)] p-[1em] pt-[0] max-w-[768px] h-full max-h-[100vh] sm:max-h-[95vh] w-full bg-[#2c2b2b] border-none shadow-[0_0_1rem_rgba(0,_0,_0,_0.3)] transition-[all_0.2s_ease-in-out] isolate scrollbar"
      >
        <div className="flex py-[1rem] items-center justify-between sticky top-0 bg-[#2c2b2b] z-[1]">
          <h2 className="text-[clamp(14px,_5vw,_24px)] font-semibold text-white">
            Create a new note
          </h2>
          <div className="flex items-center gap-8">
            <button
              className="text-[rgba(255,_255,_255,_0.6)] transition-all font-bold text-lg duration-[0.2s] hover:text-white py-[4px]"
              onClick={handleSave}
            >
              {saving ? "Saving..." : "+ Save"}
            </button>
            <button
              onClick={handleClose}
              className="text-[rgba(255,_255,_255,_0.6)] transition-all duration-[0.2s] hover:text-white"
            >
              <IoIosCloseCircleOutline size={35} />
            </button>
          </div>
        </div>
        <div className="w-full mt-[30px] flex flex-col gap-[20px]">
          <InputField placeholder={"Title"} />
          <InputField placeholder={"Folder eg:- Personal  "} />
        </div>

        <EditNote />
      </dialog>
    </>
  );
});

export default CreateNote;
