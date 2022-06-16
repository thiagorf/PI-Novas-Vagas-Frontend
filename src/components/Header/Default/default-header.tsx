import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { LoginPopUp } from "../PopUp";
import "./style.css";

interface DefaultHeaderProps {
    Component: React.ComponentType;
}

export const DefaultHeader = ({ Component }: DefaultHeaderProps) => {
    const { signed } = useAuth();

    return (
        <div className="header">
            <h3>Novas Vagas</h3>
            {signed ? <Component /> : <LoginPopUp />}
        </div>
    );
};
