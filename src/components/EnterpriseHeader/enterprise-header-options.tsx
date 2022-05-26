import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"

export const EnterpriseHeaderOptions = () => {
    const [toggle, setToggle] = useState(false)
    const { authToken, user } = useAuth();

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            {authToken 
            ? 
                <div>
                    <div onClick={handleToggle}>
                        {user.name}
                    </div>
                    {toggle &&
                        <div>
                            <Link to="/create-job">Create a Job</Link>
                            <Link to="">See my jobs</Link>
                        </div>
                    }
                </div>
            :
                <button>Login</button>
            }   
        </div>
    )
}