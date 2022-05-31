import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { createInterceptors } from "../services/interceptors";
import { AuthContextProperty, AuthApplicant, AuthEnterprise, AuthObject, AuthProps } from "./types";

export const AuthContext = createContext({} as AuthContextProperty);

export const AuthProvider = ({ children }: AuthProps) => {
    const [authToken, setAuthToken] = useState("");
    const [user, setUser] = useState<AuthApplicant | AuthEnterprise>();

    async function login(userInfo: AuthObject) {
        const response = await api.post("/v1/users/login", userInfo);

        setAuthToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        createInterceptors();
    }

    function logout() {
        setAuthToken("");
        localStorage.removeItem("token");
        setUser(null);
    }

    useEffect(() => {
        async function LoadStorageData() {
            const storageUser = localStorage.getItem("user");
            const storageToken = localStorage.getItem("token");

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                createInterceptors();
            }
        }
        LoadStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!user, authToken, login, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
