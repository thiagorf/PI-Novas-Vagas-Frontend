import { useEffect, useState } from "react";
import api from "../../../services/api";
import { JobsData } from "../../../types";
import { ContentItem } from "./content-item";
import "./style.css";

export const ContentList = () => {
    const [jobs, setJobs] = useState<JobsData[]>([]);

    useEffect(() => {
        async function getContent() {
            const response = await api.get("/v1/jobs");

            setJobs(response.data);
        }
        getContent();
    }, []);

    return (
        <div className="content">
            <div className="jobs-wrapper">
                {jobs.map((job) => (
                    <ContentItem {...job} key={job.id} />
                ))}
            </div>
        </div>
    );
};
