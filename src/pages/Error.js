import React from "react";
import lang from "../lang.json";

function Error() {
    return (
        <div>
            <div className="font-dmsans text-4xl font-bold text-center my-10">{lang.error.title}</div>
            <div className="font-dmsans text-center h-screen">{lang.error.notFound}</div>
        </div>
    );
}

export default Error;