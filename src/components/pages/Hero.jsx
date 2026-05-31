import React from "react";
import heroImage from "../../public/hero.png";
import Button from "../utilities/Button";
export default function Hero(){
    return (
        <>
        <div className="space w-full h-5/6 orderItems flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/4 h-2/4 md:h-auto">
                <img src={heroImage} alt="" className="w-full md:w-3/4 h-full mx-auto lg:w-full lg:h-2/3" />
            </div>
            <div className="flex flex-col items-center py-10 w-full md:w-3/4 lg:w-2/4">
                <h1 className="font-bomb text-5xl md:text-6xl mb-6 ">Hi, I’m <span className="text-mainColor">Noor</span></h1>
                <p className="text-blackColor text-3xl md:text-4xl font-cherry mb-6">Web Developer</p>
                <p className="text-xl md:text-2xl font-cherry text-mainColor text-center md:min-w-28 lg:min-w-20 mb-8">Turning ideas into modern, responsive, and high-performance websites.</p>
                <div className="orderItems gap-6">
                    <Button link={'#projects'} text="My Projects" classes={'mainBtn'}  />
                    <Button link={'#contact'} text="Contact Me" classes={'secondaryBtn'} />
                </div>
            </div>
        </div>
        </>
    );
}