import React from "react";
import { useToggle } from "../../../hooks";
import "./style.css";

export const PopUp = ({ children, placeholder }: { children: React.ReactNode; placeholder: string }) => {
    const { toggle, handleToggle } = useToggle();

    return (
        <div className="popup-wrapper">
            <div id="popup-cta" onClick={handleToggle}>
                {placeholder}
            </div>
            {toggle && <div className="popup">{children}</div>}
        </div>
    );
};
