import React from 'react'
import "./service-card.css"
const ServiceCard = ({
    title,
    description,
    rank
                     }) => {
    const rankToStyles = {
        "01": {
            fontColor: "text-[#01C99B]",
            hoverFontColor: "group-hover:text-[#01C99B]",
            bgColor: "bg-[#01C99B]",
            outlineColor: "hover:outline-[#01C99B]",
            gradientColor: "rank1Gradient",
        },
        "02": {
            fontColor: "text-[#3FBDF1]",
            hoverFontColor: "group-hover:text-[#3FBDF1]",

            bgColor: "bg-[#3FBDF1]",
            outlineColor: "hover:outline-[#3FBDF1]",
            gradientColor: "rank2Gradient",
        },
        "03": {
            fontColor: "text-[#FF605F]",
            hoverFontColor: "group-hover:text-[#FF605F]",

            bgColor: "bg-[#FF605F]",
            outlineColor: "hover:outline-[#FF605F]",
            gradientColor: "rank3Gradient",
        },
        "04": {
            fontColor: "text-[#FF9F31]",
            hoverFontColor: "group-hover:text-[#FF9F31]",

            bgColor: "bg-[#FF9F31]",
            outlineColor: "hover:outline-[#FF9F31]",
            gradientColor: "rank4Gradient",
        }
    }
    const rankWiseStyling = rankToStyles[rank]
    return (
            <div
                className={`cursor-pointer bg-white  pt-4 pb-6 flex flex-col gap-y-6 group hover:outline rounded-[1rem]  ${rankWiseStyling.outlineColor} hover:bg-transparent`}>
                <div className={"flex items-center flex-col lg:flex-row "}>
                    <div className={` lg:ml-[2.5rem] text-[5.6rem] text-[#707070] font-semibold `}>
                        <span>{rank[0]}</span>
                        <span className={`${rankWiseStyling.hoverFontColor}`}>{rank[1]}</span></div>
                    <h2
                        className={`${rankWiseStyling.fontColor} text-center text-[2rem] group-hover:lg:ml-8 transition-all `}>{title}</h2>
                </div>
                <h5 className={"text-[#8a8a8a] px-[10%] font-medium text-[1.125rem] text-center lg:text-start"}>{description} </h5>
            </div>

    )
}

export default ServiceCard
