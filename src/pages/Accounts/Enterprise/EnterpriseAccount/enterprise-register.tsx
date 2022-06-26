import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { EnterpriseRegisterProps } from "./enterprise-types";
import "../../../../components/Form/style.css";
import {
    FormActButton,
    FormInput,
    FormInputGroup,
    FormSteps,
    FormWrapper,
    NextButton,
    PrevButton,
} from "../../../../components/Form";
import { useFormSteps } from "../../../../hooks/useFormSteps";

export const EnterpriseRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EnterpriseRegisterProps>();

    const navigate = useNavigate();

    const { steps, setQuantity, handleNextStep, handlePrevStep } = useFormSteps();

    const attemptEnterpriseRegister: SubmitHandler<EnterpriseRegisterProps> = async (data) => {
        const response = await api.post("/v1/enterprises", { ...data, cep: Number(data.cep) });
        console.log(response.data);
        navigate("/");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptEnterpriseRegister)}>
            <FormInputGroup>
                <FormSteps steps={steps} setTotalSteps={setQuantity}>
                    <>
                        <h1>Create an Account</h1>
                        <FormInput
                            label="Nome"
                            {...register("name", { required: "Name is required" })}
                            errors={errors.name}
                        />
                        <FormInput
                            label="Email"
                            {...register("email", { required: "Email is required" })}
                            errors={errors.email}
                        />
                        <FormInput
                            label="Senha"
                            inputType="password"
                            {...register("password", { required: "Password is required" })}
                            errors={errors.password}
                        />
                        <span className="form-redirect">
                            Já tem uma conta?<Link to="/enterprise-login">Fazer login</Link>
                        </span>
                        <NextButton handleNextStep={handleNextStep} />
                    </>
                    <>
                        <PrevButton handlePrevStep={handlePrevStep} />
                        <FormInput
                            inputType="number"
                            label="Cep"
                            {...register("cep", { required: "Cep is required" })}
                            errors={errors.cep}
                        />
                        <FormInput
                            label="CNPJ"
                            {...register("cnpj", { required: "Cnpj is required" })}
                            errors={errors.cnpj}
                        />
                        <FormInput
                            label="Segment"
                            {...register("segment", { required: "Segment is required" })}
                            errors={errors.segment}
                        />

                        <FormActButton buttonLabel="Criar conta" />
                    </>
                </FormSteps>
            </FormInputGroup>
        </FormWrapper>
    );
};
