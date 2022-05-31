import { useQuery } from "react-query";
import { useAuth } from "../../../../hooks/useAuth";
import api from "../../../../services/api";

export const ApplicantJobs = () => {
    const { user } = useAuth();
    const { data, error, isLoading } = useQuery("applicant-jobs", async () => {
        const response = await api.get(`/v1/applicants/${user.id}/jobs`);
        return response.data;
    });

    if (isLoading) {
        return <div>...loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
};
