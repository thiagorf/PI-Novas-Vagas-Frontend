import { JobsData } from "../../../../types";

export interface AllEnterpriseJobs {
    id: number;
    cnpj: string;
    segment: string;
    cep: number;
    user_id: number;
    jobs: JobsData[];
}

export type Applicants = {
    curriculum: string;
    photo: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
};

export interface OneJobForEnterprise {
    id: number;
    title: string;
    salary: string;
    address: string;
    description: string;
    enterprise_id: number;
    started_at: string;
    ends_at: string;
    applicants: Applicants[];
}
