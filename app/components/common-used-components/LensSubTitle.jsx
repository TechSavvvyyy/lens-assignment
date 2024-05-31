import React from 'react'

const LensSubTitle = ({
    text,
    className
                      }) => {
    return (
        <h2 className={` ${className} font-semibold text-[1.25rem] raleway`}>{text}</h2>
    )
}
export default LensSubTitle
