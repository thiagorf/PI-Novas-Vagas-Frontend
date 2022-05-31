import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { EnterpriseLoginProps } from "./enterprise-types";
import "../../../../components/Form/style.css";

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
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(attemptEnterpriseLogin)}>
                <div className="form-fields-group">
                    <h2>Realizar login</h2>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="text" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className="input-field-error">{errors.email.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className="input-field-error">{errors.password.message}</p>}
                    </div>
                    <span className="form-redirect">
                        Don`&apos`t have an account? <Link to="/enterprise-register">Sign up</Link>
                    </span>
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};
