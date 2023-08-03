import React, { useState } from "react";
import EditActionWidgetCreator from "../../components/modules/dashboard/viewNote/EditActionWidget";
import { AiOutlineSetting } from "react-icons/ai";
import SnowEffect from "../../components/common/animations/snowflakes";

import { FiShare } from "react-icons/fi";
import { MdDelete, MdOutlinePassword } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import SidebarModalWrapper from "../../components/common/modals/SideBarWrapper";
import ProfileUpload from "../../components/modules/dashboard/profileUpload";
import ChangePassword from "../../components/modules/dashboard/changePassword";
import UpdateInfo from "../../components/modules/dashboard/updateInfo";
import ConfirmationModal from "../../components/common/modals/confirmationModal";
import { useGetMe } from "../../react-query/settings/useGetUserProfile";
import { formatObject } from "../../utils/helpers";

const Settings = () => {
  const { data } = useGetMe();
  const [showEditActions, setShowEditActions] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState({
    upload: false,
    changePassword: false,
    updateInfo: false,
    delete: false,
  });

  const handleToggleSidebar = (actionType) => {
    return setSidebarOpen((prev) => ({
      ...prev,
      [actionType]: !prev[actionType],
    }));
  };
  const handleConfirmDelete = () => {
    return handleToggleSidebar("delete");
  };

  const handleCancelAction = () => {
    return handleToggleSidebar("delete");
  };
  const formattedResult = formatObject(data?.me);

  return (
    <>
      <div className="w-full h-fit">
        <ProfilePhoto />
        <div className="flex items-center justify-between mt-6 mb-8">
          <h2 className="text-3xl font-semibold text-white ">My Profile</h2>
          <div className="relative z-[20] h-fit isolate w-fit">
            <button
              onClick={() => setShowEditActions(!showEditActions)}
              type="button"
              title={"view more actions"}
              className="flex items-center gap-2 p-1 px-3 font-semibold text-white rounded-lg bg-[#423fee] "
            >
              <span>
                <AiOutlineSetting size={18} />
              </span>
              <span> Edit Profile</span>
            </button>
            <span className="absolute bottom-[1rem] isolate z-10 left-[100%] ">
              {showEditActions && (
                <EditActionWidgetCreator
                  actionList={[
                    {
                      label: "Upload  Photo",
                      Icon: FiShare,
                      autoClose: true,
                      action: () => handleToggleSidebar("upload"),
                    },
                    {
                      label: "Change Password",
                      Icon: MdOutlinePassword,
                      autoClose: true,
                      action: () => handleToggleSidebar("changePassword"),
                    },
                    {
                      label: "Update Details",
                      Icon: BiDetail,
                      autoClose: true,
                      action: () => handleToggleSidebar("updateInfo"),
                    },
                    {
                      label: "Delete Account",
                      Icon: MdDelete,
                      type: true,
                      autoClose: true,
                      action: () => handleToggleSidebar("delete"),
                    },
                  ]}
                  close={() => setShowEditActions(false)}
                />
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 pb-6">
          {formattedResult?.map((obj, index) => (
            <InfoInput label={obj?.key} value={obj?.value} key={index} />
          ))}
        </div>
      </div>
      {isSidebarOpen.upload && (
        <SidebarModalWrapper
          label={"Upload new photo"}
          isOpen={isSidebarOpen.upload}
          onClose={() => handleToggleSidebar("upload")}
        >
          <ProfileUpload onClose={() => handleToggleSidebar("upload")} />
        </SidebarModalWrapper>
      )}
      {isSidebarOpen.changePassword && (
        <SidebarModalWrapper
          label={"Change password"}
          isOpen={isSidebarOpen.changePassword}
          onClose={() => handleToggleSidebar("changePassword")}
        >
          <ChangePassword
            onClose={() => handleToggleSidebar("changePassword")}
          />
        </SidebarModalWrapper>
      )}
      {isSidebarOpen.updateInfo && (
        <SidebarModalWrapper
          label={"Update info"}
          isOpen={isSidebarOpen.updateInfo}
          onClose={() => handleToggleSidebar("updateInfo")}
        >
          <UpdateInfo onClose={() => handleToggleSidebar("updateInfo")} />
        </SidebarModalWrapper>
      )}
      {isSidebarOpen.delete && (
        <ConfirmationModal
          heading={"Are you sure ?"}
          message="taking this action, will permanently delete your account. and action is not reversible."
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelAction}
        />
      )}
    </>
  );
};

export default Settings;

const ProfilePhoto = () => {
  const { data } = useGetMe();
  return (
    <div className="w-full overflow-hidden profile-photo h-[250px] bg-gradient-to-br flex relative justify-between from-[#3ca0fd] to-[#b765fa]">
      <div className="w-full"></div>
      <div className="absolute top-[5%] left-[55%] z-[1] w-full h-full pointer-events-none">
        <SnowEffect />
      </div>
      <div className="h-full bg-white clippy-profile aspect-square">
        <img
          src={
            data?.me?.profileIcon ||
            "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          }
          alt="profile photo "
          className="object-cover h-full aspect-square"
        />
      </div>
    </div>
  );
};
const InfoInput = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <small className="text-[#ddd] font-medium text-base"> {label}</small>
      <span className=" p-2 w-full bg-[rgba(46,45,45,0.5)] text-[#cecaca] rounded-md shadow-[0px_0px_6px_2px_#333] font-semibold text-lg">
        {value}
      </span>
    </div>
  );
};
