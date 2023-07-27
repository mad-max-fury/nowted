import React from "react";
import MiniEmptyState from "../../../components/modules/dashboard/categoryMaker/emptyState";
import FolderPrev from "../../../components/modules/dashboard/noteList/FolderPrev";
import { useGrid } from "../../../context/showGrid";

const Folders = () => {
  const { gridFlow } = useGrid();
  return (
    <div
      className={`grid w-full ${
        gridFlow ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      } gap-2 pb-4 text-white h-fit `}
    >
      {Array(25)
        .fill(0)
        .map((x, i) => <FolderPrev callback={() => null} />) || (
        <MiniEmptyState />
      )}
    </div>
  );
};

export default Folders;
