import React from "react";

interface PopUpOptionProps {
    icon: React.ReactElement;
    action: () => void;
    message: string;
}

export const PopUpOption = ({ icon, action, message }: PopUpOptionProps) => {
    return (
        <div className="popup-row-wrapper" onClick={action}>
            <div className="popup-icon">{icon}</div>
            <div className="popup-text">
                <p>{message}</p>
            </div>
        </div>
    );
};
