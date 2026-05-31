import React from "react";
import CardSkill from "../utilities/cardSkill";
import skills from "../../data/skills.json"
export default function Skill() {
    return (
        <>
            <div className="orderItems flex-wrap gap-4 w-full py-10">
                {
                    skills.map((skill) => (
                        <CardSkill key={skill.id} img={skill.image} name={skill.name} percent={skill.percent} />
                    ))
                }
            </div>
        </>
    );
}