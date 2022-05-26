import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { CommonLoginProps } from "./common-types";

export const CommonLogin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<CommonLoginProps>();
    const { login } = useAuth();
    const navigate = useNavigate();

    const attemptLogin: SubmitHandler<CommonLoginProps> = async (data) => {
        await login(data);
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(attemptLogin)}>
                <div>
                    <h3>Realizar login</h3>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" {...register("email", {required: true})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" {...register("password", {required: true})}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <span>Don't have an account? <Link to="/applicant-register">Sign up</Link></span>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}