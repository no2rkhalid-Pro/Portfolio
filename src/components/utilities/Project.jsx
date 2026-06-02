import React from "react";
import Button from "./Button";
import Index from './../../../routes/Index';

export default function Project({img, title, desc, role, technologies, liveDemoLink, githubLink}) {
    return (
        <>
        <div className="w-full lg:w-5/6 shadow-sm flex-col lg:flex-row bg-whiteColor flex justify-between items-center rounded-lg gap-6 p-6 lg:px-4 lg:py-5 border border-mainColor duration-300 hover:-translate-y-4">
            <div className="w-full md:w-5/6 lg:w-2/6 h-48 rounded-lg ">
            <a href={liveDemoLink}  target="_blank" rel="noopener noreferrer"><img src={img} alt="" className="w-full h-full rounded-lg" /></a>
                
            </div>
            <div className="w-full md:w-5/6 lg:w-4/6 flex flex-col items-start justify-center ">
                <h3 className="font-cherry text-mainColor text-2xl mb-3">{title}</h3>
                <p className="text-cherry text-blackColor text-base mb-3">{desc}</p>
                <div className="flex justify-between items-center gap-5 mb-5 flex-wrap">
                    {
                        technologies.map((technology) => (
                            <Button text={technology} classes={'bg-tagColor2  cursor-text text-tagColor1 font-cherry p-2 rounded-md '}/>
                        ))
                    }
                </div>
                <div className="flex justify-between items-center w-full flex-wrap lg:flex-nowrap gap-5 lg:gap-0">
                    <p className="text-blackColor text-lg ">Role: <span className="font-bomb">{role}</span></p>
                    <div className="flex justify-end items-center border border-[#D9D9D9] rounded-md  font-bomb">
                        <a href={liveDemoLink}  target="_blank" rel="noopener noreferrer"  className="p-3 border-r border-[#D9D9D9] bg-mainColor rounded-s-md text-whiteColor" >Live Demo</a>
                        <a href={githubLink}  target="_blank" rel="noopener noreferrer"  className="p-3 rounded-e-md text-mainColor hover:bg-mainColor hover:text-whiteColor transition-all duration-300">Github</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}