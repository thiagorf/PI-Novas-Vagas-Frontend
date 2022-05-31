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
        navigate("/protected");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptEnterpriseLogin)}>
            <FormInputGroup>
                <h2>Sign in</h2>
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
            </FormInputGroup>
            <span className="form-redirect">
                Don`&apos`t have an account? <Link to="/enterprise-register">Sign up</Link>
            </span>
            <FormActButton buttonLabel="LOGIN" />
        </FormWrapper>
    );
};
