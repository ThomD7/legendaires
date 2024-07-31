import React, { useEffect, useState } from "react";
import { routes } from '../routes.js';
import { clanName } from "../config.js";
import { getClan } from "../services/clanService.js";
import { Link } from "react-router-dom";
import lang from '../lang.json';

function Footer() {
    const [membres, setMembres] = useState();

    useEffect(() => {
        getClan().then((data) => {
            setMembres(data.memberList.slice(0, 5));
        })});

    return(
        <div className="mb-auto w-full">
            <div className="flex  bg-gray-600 text-white justify-center gap-x-20 p-10">
                <div className="flex flex-col items-start">
                    {routes.map((route) => {
                    return (
                        <a key={route.title} href={route.href} className="text-lg hover:underline">
                        {route.title}
                        </a>
                    );})}
                </div>
                <div className="flex flex-col items-start">
                    <div className="border-b mb-2">
                        {lang.footer.top5}
                    </div>
                    <ul className="w-50 m-auto justify-items-start w-max space-y-2">
                        {membres && membres.map((membre) => {
                            return (
                                <li key={membre.tag} className="">
                                    <Link to={'membre/' + membre.tag.slice(1)} className="hover:underline" >
                                        {membre.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <footer className="bg-gray-800 p-4 text-white text-center ">
                <p>&copy; {new Date().getFullYear()} - {clanName}</p>
            </footer>
        </div>
    )
};  

export default Footer;