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
                <h2>Sign in</h2>
                <FormInput
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    errors={errors.email}
                />
                <FormInput
                    inputType="password"
                    label="Password"
                    {...register("password", { required: "Password is required" })}
                    errors={errors.password}
                />
            </FormInputGroup>
            <span className="form-redirect">
                Don&apos;t have an account? <Link to="/applicant-register">Sign up</Link>
            </span>
            <FormActButton buttonLabel="LOGIN" />
        </FormWrapper>
    );
};
