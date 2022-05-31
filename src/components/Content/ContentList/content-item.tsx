import { useNavigate } from "react-router-dom";
import { JobsData } from "../../../types";

export const ContentItem = (job: JobsData) => {
    const navigate = useNavigate();
    const showMoreAboutAJob = (id: number) => {
        navigate(`/job/${id}`);
    };

    return (
        <div className="content-card" onClick={() => showMoreAboutAJob(job.id)}>
            <h3>{job.title}</h3>
            <span>{job.subtitle}</span>
            <div className="card-items">
                <span>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(job.salary)}</span>
                <span>{job.created_at}</span>
            </div>
        </div>
    );
};
