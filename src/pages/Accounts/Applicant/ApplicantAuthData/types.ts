import { JobsData } from "../../../../types";

export interface AllApplicantJobs {
    id: number;
    name: string;
    email: string;
    user_id: number;
    jobs: JobsData[];
}
