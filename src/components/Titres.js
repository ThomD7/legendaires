import React from "react";

function Titres({ texte, className }) {
    return (
        <h1 className={`${className} font-dmsans text-4xl font-bold text-center my-10`}>
            {texte}
        </h1>
    );
}

export default Titres;
