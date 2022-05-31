import { ComponentType, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import api from "../../services/api";

interface ProtectedProps {
    Component: ComponentType;
    role: string;
}

export const ProtectedRoute = ({ Component, role }: ProtectedProps) => {
    const [isValidToken, setIsValidToken] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user, logout } = useAuth();

    useEffect(() => {
        async function checkJWT() {
            const response = await api.post("/v1/users/check-jwt");

            setIsValidToken(response.data.ok);
            setLoading(false);
        }

        checkJWT();
    }, []);

    if (loading) {
        return <div>Loading....</div>;
    }

    if (isValidToken && role === user.type) {
        return <Component />;
    }

    logout();
    return <Navigate to="/" replace />;
};
