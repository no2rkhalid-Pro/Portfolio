import React from "react";

export default function Title({upText, downText, classes}){
    return (
        <>
            <div className={`px-4 md:px-20 py-10 ${classes}`}>
                <div className="mx-auto w-fit h-auto">
                    <h2 className="text-mainColor text-4xl sm:text-5xl font-bomb -mb-3 relative ">{upText} <div className="absolute bottom-0 -left-20 h-[2px] sm:w-20 bg-mainColor "></div><div className="absolute bottom-0 -right-20 h-[2px] sm:w-20 bg-mainColor "></div> </h2>
                    <p className="w-fit mx-auto text-blackColor text-2xl font-cherry capitalize ">{downText}</p>
                </div>
            </div>
        </>
    );
}