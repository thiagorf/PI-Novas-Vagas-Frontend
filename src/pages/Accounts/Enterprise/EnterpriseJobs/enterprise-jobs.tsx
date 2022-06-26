import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ContentItem } from "../../../../components";
import { UsersContent } from "../../../../components/Aligment";
import { useAuth } from "../../../../hooks/useAuth";
import api from "../../../../services/api";
import { AllEnterpriseJobs } from "./types";

export const EnterpriseJobs = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { data, error, isLoading } = useQuery<AllEnterpriseJobs>("enterprise-jobs", async () => {
        const response = await api.get(`/v1/enterprises/${user.id}/jobs`);

        return response.data;
    });

    if (error) {
        return <div>{error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UsersContent title="Vagas Criadas">
            {data.jobs.length === 0 ? (
                <p>Não possui vagas criadas.</p>
            ) : (
                <>
                    {data.jobs.map((job) => (
                        <ContentItem job={job} key={job.id} action={() => navigate(`/enterprise-one-job/${job.id}`)} />
                    ))}
                </>
            )}
        </UsersContent>
    );
};
