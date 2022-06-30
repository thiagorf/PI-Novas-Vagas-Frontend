export interface QueryStringOptions {
    q: string;
    address: string;
    salary: string;
    start_at: string;
    ends_at: string;
}

export type QQuery = Pick<QueryStringOptions, "q">;
export type SalaryQuery = Pick<QueryStringOptions, "salary">;
export type AddressQuery = Pick<QueryStringOptions, "address">;
export type DateRangeQuery = Pick<QueryStringOptions, "start_at" | "ends_at">;
