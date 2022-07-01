import { useQuery } from "react-query";
import { ContentItem } from "../../../../components";
import { useAuth } from "../../../../hooks/useAuth";
import { AllApplicantJobs } from "./types";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import "./style.css";

export const ApplicantJobs = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { data, isError, error, isLoading } = useQuery<AllApplicantJobs>("applicant-jobs", async () => {
        const response = await api.get(`/v1/applicants/${user.id}/jobs`);

        return response.data;
    });

    if (isLoading) {
        return <div>...loading</div>;
    }

    if (isError) {
        return <div>Error?{error}</div>;
    }

    return (
        <div className="user-jobs-wrapper">
            <h1>Vagas Cadastradas</h1>
            {data.jobs.length === 0 ? (
                <p>Não possui vagas cadastradas.</p>
            ) : (
                <div className="user-jobs">
                    {data.jobs.map((job) => (
                        <ContentItem action={() => navigate(`/applicant-job/${job.id}`)} job={job} key={job.id} />
                    ))}
                </div>
            )}
        </div>
    );
};
