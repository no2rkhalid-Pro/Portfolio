import React from "react";
// نستورد عنصر Link من مكتبة react-scroll وليس من react-router
import { Link } from "react-scroll"; 

export default function Links() {
    return (
        <nav className="space py-7 w-full h-fit my-auto">
            <ul className="links w-fit mx-auto orderItems gap-2 md:gap-6">
                <li className="link">
                    <Link 
                        to="home"    
                        spy={true}   
                        smooth={true}   
                        offset={-70}    
                        duration={500} 
                        activeClass="active" 
                    >
                        Home
                    </Link>
                </li>
                <li className="link">
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                        About Me
                    </Link>
                </li>
                <li className="link">
                    <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                        Skills
                    </Link>
                </li>
                <li className="link">
                    <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                        Projects
                    </Link>
                </li>
                <li className="link">
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}