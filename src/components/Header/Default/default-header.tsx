import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { LoginPopUp } from "../PopUp";
import "./style.css";

interface DefaultHeaderProps {
    Component: React.ComponentType;
}

export const DefaultHeader = ({ Component }: DefaultHeaderProps) => {
    const { signed, user } = useAuth();

    const navigate = useNavigate();

    const handleRedirect = () => {
        if (signed && user.type === "enterprise") {
            navigate("/enterprise-jobs");
        }

        navigate("/");
    };

    return (
        <div className="header">
            <h3 onClick={handleRedirect}>Novas Vagas</h3>
            {signed ? <Component /> : <LoginPopUp />}
        </div>
    );
};
