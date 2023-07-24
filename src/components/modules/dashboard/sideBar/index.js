import React, { useRef, useState } from "react";
import { logo } from "../../../../assets";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineFolderAdd } from "react-icons/ai";
import {
  FiFileText,
  FiFolder,
  FiTrash,
  FiArchive,
  FiStar,
} from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { PiFolders } from "react-icons/pi";
import CategoryMaker from "../categoryMaker";
import CreateNote from "../createNote";
import SearchInput from "../search";

const SideBar = () => {
  const createNoteRef = useRef({});
  const [showSearch, setShowSearch] = useState(false);

  const handleOpenModal = () => {
    createNoteRef.current.openModal();
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <aside className="h-screen w-full xs:max-w-[350px] sticky top-0 left-0 bg-[#101011]">
      <nav className="relative flex flex-col w-full h-full">
        <div className="sticky top-0 z-30 h-fit w-full px-[20px] pb-[20px] pt-[30px] text-white">
          <div className="flex items-center justify-between w-full">
            <div className="h-[45px] w-[120px]">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <button
              title="Search notes"
              onClick={toggleSearch}
              className="text-[rgba(255,_255,_255,_0.6)] transition-all duration-[0.2s] hover:text-white"
            >
              <BiSearch size={30} />
            </button>
          </div>

          <div
            className={`absolute top-[20px] right-[20px] z-10 ${
              showSearch ? "w-[calc(100%_-_40px)]" : "w-0"
            } transition-all duration-[0.2s]`}
          >
            {showSearch && <SearchInput close={toggleSearch} />}
          </div>

          <button
            onClick={handleOpenModal}
            className="mt-[30px] flex w-full items-center justify-center gap-4 bg-[rgba(255,_255,_255,_0.05)] px-8 py-[12px] text-[18px] font-semibold leading-6 text-white transition-all duration-[0.2s] hover:scale-[0.98]"
          >
            <span>
              <AiOutlinePlus size={25} />
            </span>
            <h3>New Note</h3>
          </button>
          <CreateNote ref={createNoteRef} />
        </div>
        <div className="scrollbar mt-[30px] flex h-full w-full flex-col gap-[30px] pb-[30px] overflow-y-auto">
          <CategoryMaker
            category=""
            quickNavigations={[
              {
                Icon: AiOutlineFieldTime,
                heading: "Recents",
                path: "/dashboard",
              },
              {
                Icon: PiFolders,
                heading: "All Folders",
                path: "/dashboard/folders",
              },
              {
                Icon: FiStar,
                heading: "Favorites",
                path: "/dashboard/favorites",
              },
              {
                Icon: FiArchive,
                heading: "Archived Notes",
                path: "/dashboard/archives",
              },
              { Icon: FiTrash, heading: "Trash", path: "/dashboard/trash" },
              {
                Icon: FaUserCog,
                heading: "Profile Settings",
                path: "/dashboard/settings",
              },
            ]}
          />
          <CategoryMaker
            category="Folders"
            CategoryIcon={AiOutlineFolderAdd}
            quickNavigations={[
              {
                Icon: FiFolder,
                heading: "Personal",
                path: "/dashboard/folders/personal",
              },
              {
                Icon: FiFolder,
                heading: "Work",
                path: "/dashboard/folders/pork",
              },
              {
                Icon: FiFolder,
                heading: "Travel",
                path: "/dashboard/folders/travel",
              },
            ]}
          />
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
