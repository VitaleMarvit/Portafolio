import React from "react";
import "./index.css";


function Header({children}) {
    return (
        <div className="div-header">
            {children}
        </div>
    )
}

export { Header };