import React from "react";
import MiniEmptyState from "./emptyState";
import { Link, useLocation, useParams } from "react-router-dom";

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
        <ul className="flex flex-col w-full h-fit ">
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

const NavTab = ({ Icon, heading, categoryName, path }) => {
  const { pathname } = useLocation();
  const active =
    path === "/dashboard"
      ? path === pathname
      : pathname
          .replace("/dashboard/", "/")
          .startsWith(path.replace("/dashboard/", "/"));
  return (
    <li
      className={`cursor-pointer transition-all duration-500 ease-in-out ${
        active && categoryName === ""
          ? "bg-tert text-white"
          : active && categoryName === "Folders"
          ? "bg-[rgba(255,_255,_255,_0.03)] text-white"
          : "text-[rgba(255,_255,_255,_0.6)] hover:text-white hover:bg-[rgba(255,_255,_255,_0.03)]"
      }`}
    >
      <Link
        to={path}
        className="flex w-full gap-3 px-[20px] py-[12px] text-base font-semibold h-fit "
      >
        <span>
          <Icon size={25} />
        </span>
        <h3>{heading}</h3>
      </Link>
    </li>
  );
};
