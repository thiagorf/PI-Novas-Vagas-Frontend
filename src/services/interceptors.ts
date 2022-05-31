import api from "./api";

export const createInterceptors = () => {
    api.interceptors.request.use((request) => {
        const token = localStorage.getItem("token");

        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
        }

        return request;
    });
};
