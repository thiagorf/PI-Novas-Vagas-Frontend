import { useEffect, useState } from "react";
import { ContentItem, ContentWrapper } from ".";
import { JobsData } from "../../../types";
import api from "../../../services/api";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ContentList = () => {
    const [jobs, setJobs] = useState<JobsData[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getContent() {
            const response = await api.get("/v1/jobs");

            setJobs(response.data);
        }
        getContent();
    }, []);

    return (
        <ContentWrapper>
            <div className="jobs-wrapper">
                {jobs.map((job) => (
                    <ContentItem job={job} key={job.id} action={() => navigate(`/job/${job.id}`)} />
                ))}
            </div>
        </ContentWrapper>
    );
};
