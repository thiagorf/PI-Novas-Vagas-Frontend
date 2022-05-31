import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { EnterpriseRegisterProps } from "./enterprise-types";
import "../../../../components/Form/style.css";

export const EnterpriseRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EnterpriseRegisterProps>();
    const navigate = useNavigate();
    const attemptEnterpriseRegister: SubmitHandler<EnterpriseRegisterProps> = async (data) => {
        const response = await api.post("/v1/enterprises", data);
        console.log(response.data);
        navigate("/");
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(attemptEnterpriseRegister)}>
                <div className="form-fields-group">
                    <h2>Cirar uma conta</h2>
                    <div className="input-field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="input-field-error">{errors.name.message}</p>}
                    </div>
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
                    <div className="input-field">
                        <label htmlFor="cep">Cep:</label>
                        <input type="text" {...register("cep", { required: "Cep is required" })} />
                        {errors.cep && <p className="input-field-error">{errors.cep.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="cnpj">Cnpj:</label>
                        <input type="text" {...register("cnpj", { required: "Cnpj is required" })} />
                        {errors.cnpj && <p className="input-field-error">{errors.cnpj.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="segment">Segment:</label>
                        <input type="text" {...register("segment", { required: "Segment is required" })} />
                        {errors.segment && <p className="input-field-error">{errors.segment.message}</p>}
                    </div>
                    <span className="form-redirect">
                        Already have an account?<Link to="/enterprise-login">Sign In</Link>
                    </span>
                </div>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    );
};
