import { useContext } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { MainContentContext, MainContentContextValues } from "../context/main-content";
import { fetchJobs } from "../services/fetchJobs";

interface UseGetJobsReturn<T, P> {
    contentContext: MainContentContextValues;
    query: UseQueryResult<T, P>;
}

export const useGetJobs = <T, P>(): UseGetJobsReturn<T, P> => {
    const contentContext = useContext(MainContentContext);

    return {
        contentContext,
        query: useQuery<T, P>(["jobs-content", contentContext.queryString], () =>
            fetchJobs(contentContext.queryString),
        ),
    };
};
