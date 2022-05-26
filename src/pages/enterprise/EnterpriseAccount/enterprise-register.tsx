import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { EnterpriseRegisterProps } from "./enterprise-types";

export const EnterpriseRegister = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<EnterpriseRegisterProps>();
    const navigate = useNavigate();
    const attemptEnterpriseRegister: SubmitHandler<EnterpriseRegisterProps> = async (data) => {
        
        const response = await api.post("/v1/enterprises", data)
        console.log(response.data)
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(attemptEnterpriseRegister)}>
                <div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" {...register("name", {required: true})}/>
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
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
                    <div>
                        <label htmlFor="cep">Cep:</label>
                        <input type="text" {...register("cep", {required: true})}/>
                        {errors.cep && <p>{errors.cep.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="cnpj">Cnpj:</label>
                        <input type="text" {...register("cnpj", {required: true})}/>
                        {errors.cnpj && <p>{errors.cnpj.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="segment">Segment:</label>
                        <input type="text" {...register("segment", {required: true})}/>
                        {errors.segment && <p>{errors.segment.message}</p>}
                    </div>
                </div>
                <button type="submit">
                    REGISTER
                </button>
            </form>
        </div>
    )
}