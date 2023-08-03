import React from "react";

const SuspenseFallbackLoader = () => {
  return (
    <div className="flex justify-center absolute top-0 left-0 bottom-0 right-0 items-center h-screen bg-[#181818] z-[500]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default SuspenseFallbackLoader;
