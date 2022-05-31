import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useToggle } from "../../../hooks/useToggle";

export const EnterpriseHeaderOptions = () => {
    const { toggle, handleToggle } = useToggle();
    const { signed, user, logout } = useAuth();

    return (
        <div>
            {signed ? (
                <div className="actions-wrapper">
                    <div onClick={handleToggle}>{user.name}</div>
                    {toggle && (
                        <div className="actions-group">
                            <Link to="/create-job">Create a Job</Link>
                            <Link to="/enterprise-jobs">See my jobs</Link>
                            <button onClick={() => logout()}>Logout</button>
                        </div>
                    )}
                </div>
            ) : (
                <button>Login</button>
            )}
        </div>
    );
};
