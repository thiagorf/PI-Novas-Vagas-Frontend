import { useAuth } from "../../../../hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useLocation, Location } from "react-router-dom";
import { ApplicantLoginProps } from "./applicant-types";
import "../../../../components/Form/style.css";
import { FormActButton, FormInput, FormInputGroup, FormWrapper } from "../../../../components/Form";
interface LocationRedirect extends Location {
    state: { from: { pathname: string } };
}

export const ApplicantLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplicantLoginProps>();
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation() as LocationRedirect;

    const attemptLogin: SubmitHandler<ApplicantLoginProps> = async (data) => {
        await login(data);

        const origin = location.state?.from?.pathname || "/";
        navigate(origin);
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptLogin)}>
            <FormInputGroup>
                <h1>Fazer login</h1>
                <FormInput
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    errors={errors.email}
                />
                <FormInput
                    inputType="password"
                    label="Senha"
                    {...register("password", { required: "Password is required" })}
                    errors={errors.password}
                />
                <span className="form-redirect">
                    Não tem uma conta?<Link to="/applicant-register">cadastre-se</Link>
                </span>
            </FormInputGroup>

            <FormActButton buttonLabel="Login" />
        </FormWrapper>
    );
};
