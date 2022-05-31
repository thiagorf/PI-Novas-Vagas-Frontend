export interface AuthProps {
    children: React.ReactNode;
}

export interface AuthObject {
    email: string;
    password: string;
}

export interface AuthContextProperty {
    authToken: string;
    user: AuthApplicant | AuthEnterprise;
    signed: boolean;
    login(userInfo: AuthObject): Promise<void>;
    logout(): void;
}

type Applicant = {
    id: number;
    photo: string;
    curriculum: string;
    user_id: number;
};

type Enterprise = {
    id: number;
    cnpj: string;
    segment: string;
    cep: string;
    user_id: number;
};

type User = {
    name: string;
    email: string;
    type: "applicant" | "enterprise";
};

export type AuthApplicant = Applicant & User;
export type AuthEnterprise = Enterprise & User;
