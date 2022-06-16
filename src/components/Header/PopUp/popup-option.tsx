import React from "react";
import { Link } from "react-router-dom";

interface PopUpOptionProps {
    icon: React.ReactElement;
    path: string;
    message: string;
}

export const PopUpOption = ({ icon, path, message }: PopUpOptionProps) => {
    return (
        <div className="popup-row-wrapper">
            <div className="popup-icon">{icon}</div>
            <div className="popup-text">
                <Link to={path}>{message}</Link>
            </div>
        </div>
    );
};
