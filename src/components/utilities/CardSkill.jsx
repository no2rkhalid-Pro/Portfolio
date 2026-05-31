import React from "react";

export default function CardSkill({percent, name, img}) {
    function getPercent() {
        document.getElementsByClassName('skill-percent');
        console.log( document.getElementsByClassName('skill-percent'));
    }
    return (
        <>
            <div className="w-full border-b border-[#9D9D9D]  md:w-2/5 lg:w-1/4 mx-5 py-5 flex flex-col justify-center items-center">
                <div className="w-24 h-24 rounded-full border-mainColor mb-5 ">
                    <img src={img} alt=""  className="w-full h-full rounded-full"/>
                </div>
                <p className="font-cherry mb-5 text-mainColor ">{name}</p>
                <p className="skill-percent relative bg-[#D9D9D9] h-2 w-40 rounded-lg "><div className={`absolute bg-mainColor left-0 rounded-lg top-0 h-full`} style={{ width: `${percent}%` }} ></div><span className="absolute right-0  -top-5 text-sm font-bold font-cherry text-mainColor ">{percent}%</span></p>
            </div>
        </>
    );
}