import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useLocation, Location } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { ApplicantLoginProps } from "./applicant-types";
import "../../../../components/Form/style.css";
import { FormInput } from "../../../../components/Form/form-input";

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
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(attemptLogin)}>
                <div className="form-fields-group">
                    <h2>Realizar login</h2>
                    <FormInput
                        label="Email"
                        errors={errors.email}
                        {...register("email", { required: "Email is required" })}
                    />
                    {/* <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="text" {...register("email", { required: "Email is necessary" })} />
                        {errors.email && <p className="input-field-error">{errors.email.message}</p>}
    </div>*/}
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className="input-field-error">{errors.password.message}</p>}
                    </div>
                    <span className="form-redirect">
                        Don&apos;t have an account? <Link to="/applicant-register">Sign up</Link>
                    </span>
                </div>
                <button className="form-act " type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};
