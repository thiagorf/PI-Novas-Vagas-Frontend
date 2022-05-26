import React, { createContext, useState } from "react";
import api from "../services/api";
import { AuthContextProperty, AuthApplicant, AuthEnterprise, AuthObject, AuthProps } from "./types";

export const AuthContext = createContext({} as AuthContextProperty);

export const AuthProvider = ({ children }: AuthProps) => {
    const [authToken, setAuthToken] = useState("");
    const [user, setUser] = useState<AuthApplicant | AuthEnterprise>();

    async function login(userInfo: AuthObject) {
        const response = await api.post("/v1/users/login", userInfo);

        setAuthToken(response.data.token);
        setUser(response.data.user);
    }

    function logout() {
        setAuthToken("");
        setUser(null);
    }

    return <AuthContext.Provider value={{ authToken, login, user, logout }}>{children}</AuthContext.Provider>;
};
