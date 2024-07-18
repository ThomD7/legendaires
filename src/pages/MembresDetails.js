import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClanMembers } from "../services/clanService";
import Titres from "../components/Titres";

function MembresDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState();

    useEffect(() => {
        getClanMembers(id).then((result) => {
            console.log(result);
            setInitialData(result);
        }
    )}, [id]);

    if (!initialData) {
        return (
            <div>
                <div>
                    <Titres texte="Chargement..." />
                </div>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Retour</button>
            <div className="flex flex-col items-center">
                {initialData.league && (
                    <div>
                        <img src={initialData.league.iconUrls.small} width={80} alt="Ligue" />
                    </div>
                )}
                <div>{initialData.trophies}</div>
                <Titres texte={initialData.name} />
            </div>
        </div>
    );
}

export default MembresDetails;