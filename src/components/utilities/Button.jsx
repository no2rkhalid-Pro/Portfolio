import React from "react"

export default function Button({text, classes, link}) {
    return (
        <>
        <a className={` ${classes} whitespace-nowrap `} href={link} style={{ behavior: "smooth"}}>{text}</a>
        </>
    );
}