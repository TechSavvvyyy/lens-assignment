import React from "react";

const LensButton = ({
    text,
    className
                    }) => {
    return (
        <div
            className={` ${className} text-[1.2rem] rounded-[0.75rem] transition-all duration-300 ease-out border-[1px] border-solid border-black cursor-pointer hover:scale-x-[110%] w-fit border-[#11111c]  bg-[#11111c] text-white py-[0.6rem] px-8 hover:bg-white hover:text-[#11111c]`}>
            {text}
        </div>
    )
}
export default LensButton