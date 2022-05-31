import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useLocation, Location } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { ApplicantLoginProps } from "./applicant-types";
import "../../../../components/Form/style.css";
import { FormInput } from "../../../../components/Form/form-input";
import { FormWrapper } from "../../../../components/Form/form-wrapper";
import { FormInputGroup } from "../../../../components/Form/form-input-group";
import { FormActButton } from "../../../../components/Form/form-act-button";

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
