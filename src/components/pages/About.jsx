import React from "react";
import aboutImage from "../../public/about.png"
export default function About() {
    return (
        <> 
        <div className="space flex h-5/6 flex-col items-center justify-center gap-6 py-10">
            <div className="w-full md:w-2/4 lg:w-2/5 h-3/5 orderItems">
                <img src={aboutImage} alt=""  className="w-full h-full m-auto my-8" />
            </div>
            <div className="w-full h-2/5 flex justify-center items-start">
                <p className="line-height text-blackColor font-cherry text-xl w-full md:w-3/4 text-start mx-auto ">I am a software developer specializing in front-end development with React JS and TailwindCss, focused on building responsive web applications, which supports well-structured interfaces.<br/><br/>
                I also have experience in backend development with ASP.NET Core and Sql Server Database and basic knowledge of UI/UX design using Figma.</p>
            </div>
        </div>
        </>
    );
}