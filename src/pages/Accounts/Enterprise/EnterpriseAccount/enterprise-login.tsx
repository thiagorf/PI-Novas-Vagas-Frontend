import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { EnterpriseLoginProps } from "./enterprise-types";
import "../../../../components/Form/style.css";
import { FormActButton, FormInput, FormInputGroup, FormWrapper } from "../../../../components/Form";

export const EnterpriseLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EnterpriseLoginProps>();
    const navigate = useNavigate();
    const { login } = useAuth();

    const attemptEnterpriseLogin: SubmitHandler<EnterpriseLoginProps> = async (data) => {
        await login(data);
        navigate("/enterprise-jobs");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptEnterpriseLogin)}>
            <FormInputGroup>
                <h1>Sign in</h1>
                <FormInput
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    errors={errors.email}
                />
                <FormInput
                    inputType="password"
                    label="password"
                    {...register("password", { required: "Password is required" })}
                    errors={errors.password}
                />
                <span className="form-redirect">
                    Não tem uma conta? <Link to="/enterprise-register">Cadastre-se</Link>
                </span>
            </FormInputGroup>
            <FormActButton buttonLabel="Login" />
        </FormWrapper>
    );
};
