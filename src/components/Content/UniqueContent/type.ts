export interface OneJobData {
    id: number;
    title: string;
    salary: number;
    address: string;
    description: string;
    enterprise_id: number;
    started_at: string;
    ends_at: string;
    enterprise: {
        name: string;
        email: string;
        cellphone: [];
        socialmedia: [];
    };
}
