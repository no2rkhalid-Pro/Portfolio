import React, { useEffect, useRef, useState } from "react";
import Button from "../src/components/utilities/Button";
import Title from "../src/components/utilities/Title";
import Links from "../src/components/utilities/Links";
import Hero from "../src/components/pages/Hero";
import About from "../src/components/pages/About";
import Skill from "../src/components/pages/Skill";
import Projects from "../src/components/pages/Projects";
import Contact from "../src/components/pages/Contact";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

export default function Home() {
    const [goToTopArrow, setGoToTopArrow] = useState(false);
    const topRef = useRef();
  
    const handleGoToTop = () => {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    };
      useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, []);
  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
  }  
  return (
    <>
      <div className="h-screen bg-[linear-gradient(to_top,#97E7E1_0%,#97E7E1_25%,#FFFFFF_69%)] lg:bg-[linear-gradient(to_left,#97E7E1_0%,#97E7E1_25%,#FFFFFF_69%)]" ref={topRef}>
        <Links />
        <Hero />
      </div>
      <section className=" min-h-screen xl:h-screen relative" id="about">
        <div className="w-full h-full absolute top-0 left-0 bg-secondaryColor opacity-15 -z-10 ">
        </div>
        <Title upText={'About Me'} downText={'Who am i?'} classes={'h-1/6'} />
        <About />
      </section>
      <section  className=" min-h-screen " id="skills">
        <Title upText={'My Skills'} downText={'What I’m Good At'} classes={'h-1/6'} />
        <Skill />
      </section>  
      <section className=" min-h-screen relative space" id="projects">
        <div className="w-full h-full absolute top-0 left-0 bg-secondaryColor opacity-15 -z-10 ">
        </div>
        <Title upText={'My Projects'} downText={'What I have Built'} />
        <Projects />
      </section>
      <section className="space" id="contact">
        <Title upText={'Contact Me'} downText={' How to Reach Me'} />
        <Contact  />
      </section>
            {goToTopArrow && (
          <BsFillArrowUpRightCircleFill
              className="fixed z-50 text-mainColor bottom-10 right-5 hover:cursor-pointer"
              size={40}
              onClick={handleGoToTop}
          />
      )} 
    </>
  );
}
