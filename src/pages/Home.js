import React from "react";
import Heros from "../components/Heros";
import Membres from "../components/Membres";
import { Helmet } from "react-helmet";
import { clanName } from "../config";
import lang from "../lang.json";

function Home() {
    return (
        <div
        >
            <Helmet>
                <title>{clanName} | {lang.index.title}</title>
            </Helmet>
            <Heros/>
            <Membres/>
        </div>
    );
}

export default Home;