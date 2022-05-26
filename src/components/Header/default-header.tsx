import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"
import "./style.css"


interface DefaultHeaderProps {
    Component: React.ComponentType
}

export const DefaultHeader = ({Component}: DefaultHeaderProps) => {
    const [toggle, setToggle] = useState(false)
    const { authToken } = useAuth();

    return (
        <div className="header">
            <h1>Novas Vagas</h1>
            {!authToken ? 
                <div >
                    <div onClick={() => setToggle(!toggle)}>
                        Login
                    </div>
                    {toggle &&
                        <div className="">
                            <Link to="/applicant-login">Login para candidatos</Link>
                            <Link to="/enterprise-login">Login para empresas</Link>
                        </div>
                    }
                </div>
            :
                <Component />
            }
            
        </div>
    )
}