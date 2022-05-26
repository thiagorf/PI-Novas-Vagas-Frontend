import { SubmitHandler, useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import { EnterpriseLoginProps } from "./enterprise-types"

export const EnterpriseLogin = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<EnterpriseLoginProps>()
    const navigate = useNavigate();
    const { login } = useAuth();

    const attemptEnterpriseLogin: SubmitHandler<EnterpriseLoginProps> = async (data) => {

        await login(data);
        navigate("/protected")
        //const response = await api.post("/v1/users/login", data);

        //console.log(response)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(attemptEnterpriseLogin)}>
                <div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" {...register("email", {required: true})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" {...register("password", {required: true})}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <span>Don't have an account? <Link to="/enterprise-register">Sign up</Link></span>
                </div>
                <button type="submit">
                    LOGIN
                </button>
            </form>
        </div>
    )
}