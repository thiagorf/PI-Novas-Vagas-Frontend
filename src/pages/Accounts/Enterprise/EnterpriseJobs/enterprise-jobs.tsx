import { useQuery } from "react-query";
import { useAuth } from "../../../../hooks/useAuth";
import api from "../../../../services/api";

export const EnterpriseJobs = () => {
    const { user } = useAuth();
    const { data, error, isLoading } = useQuery("enterprise-jobs", async () => {
        const response = await api.get(`/v1/enterprises/${user.id}/jobs`);

        return response.data;
    });

    if (error) {
        return <div>{error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
};
