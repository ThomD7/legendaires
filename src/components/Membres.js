import React, { useEffect, useState } from "react";
import { getClan } from "../services/clanService";
import Titres from "./Titres";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import lang from '../lang.json';
import { routes, routesParams } from "../routes";

function Membres() {
    const [membres , setMembres] = useState();

    useEffect(() => {
        getClan().then((result) => {
            console.log(result.memberList);
            setMembres(result.memberList);
        });
    }, []);
    return (
        <div>
            <div id={routes[1].href.substring(2)}>
                <Titres texte={lang.index.membersList}/>
            </div>
            <ul className="w-50 m-auto justify-items-start w-max space-y-2">
                {membres && membres.map((membre) => {
                    return (
                        <motion.li key={membre.tag}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ 
                                scale: 1.1
                            }}
                        >
                            <Link to={routesParams[0].href + membre.tag.slice(1)}  className="flex items-center gap-x-6 rounded-lg px-20 py-5 bg-gray-100">
                                {membre.league && (
                                    <div>
                                        <img src={membre.league.iconUrls.tiny} alt={lang.index.ligueAlt + membre.league.name} />
                                    </div>
                                )}
                                <div>
                                    {membre.trophies}
                                </div>
                                <div>
                                    {membre.name}
                                </div>    
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Membres;