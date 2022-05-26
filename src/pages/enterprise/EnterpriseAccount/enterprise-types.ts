export interface EnterpriseLoginProps {
    email: string;
    password: string;
}

export interface EnterpriseRegisterProps {
    name: string;
    email: string;
    password: string;
    cnpj: string;
    cep: number;
    segment: string;
}