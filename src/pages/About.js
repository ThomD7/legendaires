import React from "react";
import Titres from "../components/Titres";
import lang from "../lang.json";

function About() {
    return (
        <div>
            <Titres texte={lang.about.title}/>
            <div className="m-auto text-justify w-3/4 md:w-1/2 mb-10">
                {lang.about.content}
            </div>
        </div>
    );
}

export default About;