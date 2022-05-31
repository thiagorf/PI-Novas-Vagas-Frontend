import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useToggle } from "../../../hooks/useToggle";

export const ApplicantHeaderOptions = () => {
    const { toggle, handleToggle } = useToggle();
    const { signed, user, logout } = useAuth();

    return (
        <div>
            {signed ? (
                <div className="actions-wrapper">
                    <div onClick={handleToggle}>{user.name}</div>
                    {toggle && (
                        <div className="actions-group">
                            <Link to="/applied-jobs">see my applied jobs</Link>
                            <button onClick={() => logout()}>logout</button>
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
