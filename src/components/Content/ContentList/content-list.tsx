import { useEffect, useState } from "react";
import "./style.css";
import api from "../../../services/api";
import { JobsData } from "../../../types";
import { ContentItem } from "./content-item";

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
        <>
            {jobs.map((job) => (
                <ContentItem {...job} key={job.id} />
            ))}
        </>
    );
};
