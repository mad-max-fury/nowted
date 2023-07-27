import { useRef, useEffect } from "react";

const useModalRef = (ref) => {
  const editNoteRef = useRef();

  useEffect(() => {
    const showModal = () => {
      editNoteRef?.current?.showModal();
    };

    const closeModal = () => {
      editNoteRef?.current?.close();
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

  return editNoteRef;
};

export default useModalRef;
