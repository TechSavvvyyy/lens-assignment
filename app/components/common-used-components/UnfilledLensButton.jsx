import React from "react";

const UnfilledLensButton = ({
                        text,
                        className
                    }) => {
    return (
        <div
            className={` ${className} text-[1.2rem] rounded-[0.75rem] transition-all duration-300 ease-out border-[1px] border-solid border-black cursor-pointer hover:scale-x-[110%] w-fit border-[#11111c]  bg-transparent text-[#11111c]   py-[0.6rem] px-8 hover:bg-black hover:text-white`}>
            {text}
        </div>
    )
}
export default UnfilledLensButton