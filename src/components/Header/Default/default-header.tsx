import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./style.css";

interface DefaultHeaderProps {
    Component: React.ComponentType;
}

export const DefaultHeader = ({ Component }: DefaultHeaderProps) => {
    const [toggle, setToggle] = useState(false);
    const { signed } = useAuth();

    return (
        <div className="header">
            <h1>Novas Vagas</h1>
            {signed ? (
                <Component />
            ) : (
                <div className="actions-wrapper">
                    <div onClick={() => setToggle(!toggle)}>Login</div>
                    {toggle && (
                        <div className="actions-group">
                            <p>
                                <Link to="/applicant-login">Login para candidatos</Link>
                            </p>
                            <span className="line"></span>
                            <p>
                                <Link to="/enterprise-login">Login para empresas</Link>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
