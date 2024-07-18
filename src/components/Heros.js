import React from "react";
import img from "../hero.png";
import Titres from "./Titres";

function Heros() {
    return (
        <div className="">
            <img className="m-auto" src={img} alt="Clash of Clans"/>
            <Titres texte="Rejoignez nous:" className="left-0"/>
        </div>
    );
}

export default Heros;