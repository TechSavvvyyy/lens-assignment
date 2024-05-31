import React from "react";
const BlogCard = ({
  isNew,
  smallDesc,
  blogHeading,
  descClassName,
  blogLink,
  date,
  hoverBgColor,
  bgColor,
}) => {
  return (
    <div
      className={`bg-white rounded-[1rem] p-6  group flex flex-col  overflow-hidden 
         ${hoverBgColor}`}
    >
      <div className="h-[100%] flex flex-col transition-all group-hover:translate-y-[-4rem] justify-between">
        <div>
          {isNew ? (
            <span className="text-[1.25rem] font-medium text-red-500">
              New!
            </span>
          ) : (
            <span className={"text-[1.25rem] font-medium text-[#656565]"}>
              {date}
            </span>
          )}
          <h2 className="text-[1.725rem] my-6 text-black font-medium">
            {blogHeading}
          </h2>
        </div>
        <div>
          <p className={`${bgColor} py-[1.625rem]  px-4 rounded-[1rem]`}>
            {smallDesc}
          </p>
        </div>
      </div>
      <div className={"flex"}>
        <a href={blogLink}>
          <button className="hidden font-medim text-[1rem] group-hover:flex group-hover:items-center group-hover:text-red-500">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="readMoreIcon"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
