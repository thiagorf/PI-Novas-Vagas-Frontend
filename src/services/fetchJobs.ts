import api from "./api";

export const fetchJobs = async (filters?) => {
    const response = await api.get("/v1/jobs", {
        params: filters,
    });

    console.log(response.data);
    return response.data;
};
