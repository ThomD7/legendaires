import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClanMembers } from "../services/clanService";
import Titres from "../components/Titres";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { clanName } from "../config";
import { Tooltip } from "react-tooltip";
import lang from "../lang.json";

const roles = {
    "member": lang.member.member,
    "admin": lang.member.admin,
    "coLeader": lang.member.coLeader,
    "leader": lang.member.leader,
};

function MembresDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState();
    const [estCopie, setCopie] = useState(false);

    const toggleCopie = () => {
        setCopie(true);
    };

    useEffect(() => {
        getClanMembers(id).then((result) => {
            console.log(result);
            setInitialData(result);
        });
    }, [id]);

    if (!initialData) {
        return (
            <div>
                <div>
                    <Titres texte={lang.member.loading} />
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen">
            <button 
                className="bg-gray-600 hover:bg-gray-800 text-white font-bold mb-10 ms-10 py-2 px-4 rounded-2xl"
                onClick={() => navigate(-1)}>{lang.member.backButton}</button>
            <div className="flex flex-col items-center">
                {initialData.league && (
                    <div>
                        <img src={initialData.league.iconUrls.small} width={80} alt={lang.member.ligueAlt + initialData.league.name} />
                    </div>
                )}
                <Helmet>
                    <title>{clanName} | {initialData.name}</title>
                </Helmet>
                <div>{initialData.trophies}</div>
                <Titres texte={initialData.name} />
                <motion.div
                    whileHover={{ 
                        cursor: "pointer",
                        scale: 1.1 
                    }}
                    onClick={() => {
                        toggleCopie();
                        navigator.clipboard.writeText(initialData.tag)
                    }}
                    className={estCopie ? "-mt-10 text-green-500" : "-mt-10 hover:text-blue-600"}>
                    {initialData.tag}{estCopie ?  <> &#x2713;</> : null}
                </motion.div>
                <div>{roles[initialData.role]}</div>
                <div className="flex gap-x-4">
                    {
                        initialData.labels.map((label) => {
                            return (
                                <div key={label.id} className="flex flex-col items-center">
                                    <Tooltip 
                                        style={
                                            {
                                                borderRadius: "15px",
                                            }
                                        }
                                        anchorSelect={".anchor" + label.id}
                                     place="top">{label.name}</Tooltip>
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        width={40}
                                        alt="Label"
                                        src={label.iconUrls.small}
                                        className={"anchor" + label.id}
                                    ></motion.img>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MembresDetails;
