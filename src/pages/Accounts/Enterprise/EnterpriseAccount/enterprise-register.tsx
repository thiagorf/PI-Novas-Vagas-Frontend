import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { EnterpriseRegisterProps } from "./enterprise-types";
import "../../../../components/Form/style.css";
import { FormActButton, FormInput, FormInputGroup, FormWrapper } from "../../../../components/Form";

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
        <FormWrapper onSubmit={handleSubmit(attemptEnterpriseRegister)}>
            <FormInputGroup>
                <h2>Create an Account</h2>
                <FormInput label="Name" {...register("name", { required: "Name is required" })} errors={errors.name} />
                <FormInput
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    errors={errors.email}
                />
                <FormInput
                    label="Password"
                    inputType="password"
                    {...register("password", { required: "Password is required" })}
                    errors={errors.password}
                />
                <FormInput label="Cep" {...register("cep", { required: "Cep is required" })} errors={errors.cep} />
                <FormInput label="CNPJ" {...register("cnpj", { required: "Cnpj is required" })} errors={errors.cnpj} />
                <FormInput
                    label="Segment"
                    {...register("segment", { required: "Segment is required" })}
                    errors={errors.segment}
                />
            </FormInputGroup>
            <span className="form-redirect">
                Already have an account?<Link to="/enterprise-login">Sign In</Link>
            </span>
            <FormActButton buttonLabel="REGISTER" />
        </FormWrapper>
    );
};
