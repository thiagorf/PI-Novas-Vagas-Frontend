import { useNavigate } from "react-router-dom";
import { JobsData } from "../../../types";
import { DateFomat } from "../../../util";

export const ContentItem = (job: JobsData) => {
    const navigate = useNavigate();
    const showMoreAboutAJob = (id: number) => {
        navigate(`/job/${id}`);
    };

    return (
        <div className="job-card" onClick={() => showMoreAboutAJob(job.id)}>
            <h4>{job.title}</h4>
            <p data-title={`${job.enterprise.name}, ${job.address}`} className="job-subtitle">
                {job.enterprise.name},{job.address}
            </p>
            <div>
                <p className="job-description">{job.description}</p>
                <span className="job-date">Postado em {DateFomat(job.started_at)}</span>
            </div>
            <button className="job-cta">Ver Mais</button>
        </div>
    );
};
