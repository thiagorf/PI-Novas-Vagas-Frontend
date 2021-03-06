export interface CreateJobData {
    title: string;
    salary: string;
    address: string;
    description: string;

    enterprise_id?: number;

    started_at?: Date;
    ends_at: string;
}
