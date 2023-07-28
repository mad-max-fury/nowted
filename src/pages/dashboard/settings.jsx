import React, { useState } from "react";
import EditActionWidgetCreator from "../../components/modules/dashboard/viewNote/EditActionWidget";
import { AiOutlineSetting } from "react-icons/ai";
import SnowEffect from "../../components/common/animations/snowflakes";

const Settings = () => {
  const [showEditActions, setShowEditActions] = useState(false);

  return (
    <div className="w-full h-fit">
      <ProfilePhoto />
      <div className="flex items-center justify-between mt-6 mb-4">
        <h2 className="text-3xl font-semibold text-white ">Ndubuisi Obinna</h2>
        <div className="relative z-50 h-fit isolate w-fit">
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
          <span className="absolute bottom-[1rem] left-[100%] ">
            {showEditActions && (
              <EditActionWidgetCreator
                close={() => setShowEditActions(false)}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Settings;

const ProfilePhoto = () => {
  return (
    <div className="w-full overflow-hidden profile-photo h-[250px] bg-gradient-to-br flex relative justify-between from-[#3ca0fd] to-[#b765fa]">
      <div className="w-full"></div>
      <div className="absolute top-[5%] left-[55%] z-[1] w-full h-full pointer-events-none">
        <SnowEffect />
      </div>

      <div className="h-full bg-white clippy-profile aspect-square">
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt="profile photo "
          className="object-cover h-full aspect-square"
        />
      </div>
    </div>
  );
};
