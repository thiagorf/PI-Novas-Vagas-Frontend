import axios from "axios";

const url = import.meta.env.VITE_DATABASE_URL || "http://localhost:8000";

const api = axios.create({
    baseURL: url,
});

export default api;
