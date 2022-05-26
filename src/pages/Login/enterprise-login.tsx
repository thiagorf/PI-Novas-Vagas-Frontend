import { LoginRequiredData } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import "./style.css";
import React from "react";
import { Link } from "react-router-dom";


const Login= () => {
    const { register, handleSubmit, formState: {errors} } = useForm<LoginRequiredData>()
    const context = useAuth();

    const onSubmit: SubmitHandler<LoginRequiredData> = async (data) => {
        console.log(data)
        context.Login(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
                <div className="form-field-group">
                    <h3>Fazer Login</h3>
                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            className={`form-input ${errors.email ? "form-input-error": ""}`} 
                            type="text" 
                            id="email"
                            {...register("email", {required: "Email is required"})}
                        />
                        {errors.email && <p className="form-field-error">{errors.email?.message}</p>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password:</label>
                        <input 
                            className={`form-input ${errors.password ? "form-input-error": ""}`} 
                            type="password" 
                            id="password" 
                            {...register("password", {required: "Password is required"})}
                        />
                        {errors.password && <p className="form-field-error">{errors.password?.message}</p>}
                    </div>
                    <span><Link to="/sign-up">Create an account</Link></span>
                </div>
                
                <button type="submit" className="form-submit-button">
                    LOGAR
                </button>
            </form>
        </div>
    )
}

export default Login;