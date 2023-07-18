import React from "react";
import MiniEmptyState from "./emptyState";

const CategoryMaker = ({ category, CategoryIcon, quickNavigations = [] }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center justify-between px-[20px]">
        <h2 className=" text-[15px] font-semibold leading-5 text-[rgba(255,_255,_255,_0.6)]">
          {category}
        </h2>
        {CategoryIcon && (
          <button
            title={"Create a folder"}
            className="text-[rgba(255,_255,_255,_0.6)] transition-all duration-[0.2s] hover:text-white"
          >
            <CategoryIcon size={30} />
          </button>
        )}
      </div>
      {quickNavigations.length > 0 ? (
        <ul className="flex h-fit w-full flex-col ">
          {quickNavigations.map((item, i) => (
            <NavTab
              key={i}
              {...item}
              active={i === 0}
              categoryName={category}
            />
          ))}
        </ul>
      ) : (
        <MiniEmptyState />
      )}
    </div>
  );
};

export default CategoryMaker;

const NavTab = ({ Icon, heading, active, categoryName }) => {
  return (
    <li
      className={`cursor-pointer px-[20px] py-[12px]  ${
        active && categoryName === "Recents"
          ? " bg-tert text-white"
          : "text-[rgba(255,_255,_255,_0.6)]"
      } ${
        active && categoryName === "Folders"
          ? "bg-[rgba(255,_255,_255,_0.03)] text-white"
          : "text-[rgba(255,_255,_255,_0.6)]"
      } ${
        active && categoryName === "More"
          ? "bg-[rgba(255,_255,_255,_0.03)] text-white"
          : "text-[rgba(255,_255,_255,_0.6)]"
      }`}
    >
      <div className="flex h-fit w-full gap-3 text-base font-semibold ">
        <span>
          <Icon size={25} />
        </span>
        <h3>{heading}</h3>
      </div>
    </li>
  );
};
