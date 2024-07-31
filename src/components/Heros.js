import React from "react";
import img from "../hero.png";
import Titres from "./Titres";
import { motion, useScroll, useTransform } from 'framer-motion';
import lang from '../lang.json';

function Heros() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.div className="relative mx-5 h-screen flex items-center justify-center"
            style={{ scale, opacity }}
        >
            <img className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" src={img} alt={lang.index.heroAlt}/>
            <Titres texte={lang.index.heroText} className="[text-shadow:_0_5px_10px_rgb(0_0_0_/_90%)] relative text-7xl sm:text-8xl text-white text-center" />
        </motion.div>
    );
}

export default Heros;
