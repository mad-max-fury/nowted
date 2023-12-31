import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { logo } from "../../../../assets";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineFolderAdd } from "react-icons/ai";
import { FiFolder, FiTrash, FiArchive, FiStar } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { PiFolders } from "react-icons/pi";
import CategoryMaker from "../categoryMaker";
import CreateNote from "../createNote";
import SearchInput from "../search";
import { useSignOut } from "../../../../react-query/auth/useSignOut";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { IoClose } from "react-icons/io5";

const SideBar = ({
  handleOpenModal,
  createNoteRef,
  sideBarActive,
  setSideBarActive,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <aside
      className={
        isAboveMediumScreens
          ? "h-screen w-full xs:max-w-[320px] sticky top-0 left-0 bottom-0 bg-[#101011]"
          : ` fixed bottom-0 top-0 w-full xs:max-w-[320px] z-[500] bg-[#101011] transition-all shadow-2xl duration-[0.3s] ease-in-out ${
              sideBarActive ? "left-0" : "left-[-100vw]"
            }`
      }
    >
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
                path: "/dashboard/folders/work",
              },
              {
                Icon: FiFolder,
                heading: "Travel",
                path: "/dashboard/folders/travel",
              },
            ]}
          />
        </div>
        <Logout />
      </nav>

      <button
        type="button"
        onClick={setSideBarActive}
        className={`h-[50px] w-[50px] absolute rounded-full left-[50%] translate-x-[-1/2] bottom-[80px] shadow-xl bg-[rgba(255,255,255,0.1)] flex md:hidden items-center ml-1 ${
          !sideBarActive
            ? "text-[rgba(255,255,255,1)]"
            : "text-[rgba(255,255,255,0.5)]"
        } justify-center`}
      >
        <IoClose size={"22px"} className="m-auto" />
      </button>
    </aside>
  );
};

export default SideBar;

const Logout = () => {
  const { refetch } = useSignOut();
  const handleLogout = () => {
    return refetch();
  };

  return (
    <div className="sticky flex items-center justify-center w-full px-2 h-14 bottom-2">
      <button
        onClick={handleLogout}
        className="flex w-full gap-3 px-[20px] py-[12px] text-base font-semibold h-fit  text-white bg-red-500 rounded-md hover:bg-red-700"
      >
        <span>
          <FaSignOutAlt size={25} />
        </span>
        <h3>Logout</h3>
      </button>
    </div>
  );
};
