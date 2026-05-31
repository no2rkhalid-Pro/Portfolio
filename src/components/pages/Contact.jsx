import React from "react";
import { BsLinkedin, BsTelegram, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
    return (
        <>
        <div className="py-10 orderItems gap-6">
            <a href=""><BsTelegram  className="text-3xl text-[#24A1DE] hover:opacity-80 transition-opacity"/></a>
            <a href=""><BsLinkedin  className="text-3xl text-[#0077B5] hover:opacity-80 transition-opacity"/></a>
            <a href=""><BsWhatsapp  className="text-3xl text-[#25D366] hover:opacity-80 transition-opacity" /></a>
        </div>
        </>
    );
}