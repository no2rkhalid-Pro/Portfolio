import React from "react";
import { BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Contact() {
    return (
        <>
        <div className="py-10 orderItems gap-6">
            <a href="https://t.me/No2r_kh" target="_blank" rel="noopener noreferrer"><BsTelegram  className="text-3xl text-[#24A1DE] hover:opacity-80 transition-opacity"/></a>
            <a href="https://linkedin.com/in/noor-al-mashreqi" target="_blank" rel="noopener noreferrer"><BsLinkedin  className="text-3xl text-[#0077B5] hover:opacity-80 transition-opacity"/></a>
            <a href="https://wa.me/967778695735" target="_blank" rel="noopener noreferrer"><BsWhatsapp  className="text-3xl text-[#25D366] hover:opacity-80 transition-opacity" /></a>
            <a href="mailto:noor0almashreqi@gmail.com">
            <SiGmail  className="text-3xl text-red-500 hover:opacity-80 transition-opacity" />
            </a>            
        </div>
        </>
    );
}