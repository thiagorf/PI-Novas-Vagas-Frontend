import { ContentItem, ContentWrapper } from ".";
import { JobsData } from "../../../types";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useGetJobs } from "../../../hooks/useGetJobs";

export const ContentList = () => {
    const navigate = useNavigate();

    // const { data, isLoading, isError, error } = useQuery<JobsData[], Error>("jobs-content", () => fetchJobs());

    const {
        query: { data, isError, error, isLoading },
    } = useGetJobs<JobsData[], Error>();

    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ContentWrapper>
            <div className="jobs-wrapper">
                {data.map((job) => (
                    <ContentItem job={job} key={job.id} action={() => navigate(`/job/${job.id}`)} />
                ))}
            </div>
        </ContentWrapper>
    );
};
