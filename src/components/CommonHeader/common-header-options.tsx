import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const CommonHeaderOptions = () => {
    const [toggle, setToggle] = useState(false);
    const { authToken, user } = useAuth();

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            {authToken ? (
                <div>
                    <div onClick={handleToggle}>{user.name}</div>
                    {toggle && (
                        <div>
                            <Link to="/applied-jobs">see my applied jobs</Link>
                            <button>A</button>
                            <button>A</button>
                        </div>
                    )}
                </div>
            ) : (
                <button>Login</button>
            )}
        </div>
    );
};
