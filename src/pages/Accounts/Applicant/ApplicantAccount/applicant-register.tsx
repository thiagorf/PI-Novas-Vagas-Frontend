import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ApplicantRegisterProps } from "./applicant-types";
import {
    FileInput,
    FormActButton,
    FormInput,
    FormInputGroup,
    FormSteps,
    FormWrapper,
    PrevButton,
} from "../../../../components/Form";
import { useFormSteps } from "../../../../hooks/useFormSteps";
import api from "../../../../services/api";
import "../../../../components/Form/style.css";
import { NextButton } from "../../../../components/Form/Steps/next-button";

export const ApplicantRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplicantRegisterProps>();
    const navigate = useNavigate();

    const { steps, setQuantity, handleNextStep, handlePrevStep } = useFormSteps();

    const attemptRegister: SubmitHandler<ApplicantRegisterProps> = async (data) => {
        const response = await api.post("/v1/applicants", data);
        console.log(response.data);
        navigate("/");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptRegister)}>
            <FormInputGroup>
                <FormSteps steps={steps} setTotalSteps={setQuantity}>
                    <>
                        <h1>Criar uma conta</h1>
                        <FileInput />
                        <FormInput
                            label="name"
                            {...register("name", { required: "Name is required" })}
                            errors={errors.name}
                        />
                        <span className="form-redirect">
                            Já tem uma conta?<Link to="/applicant-login">Fazer login</Link>
                        </span>
                        <NextButton handleNextStep={handleNextStep} />
                    </>

                    <>
                        <PrevButton handlePrevStep={handlePrevStep} />
                        <FormInput
                            label="email"
                            {...register("email", { required: "Email is required" })}
                            errors={errors.email}
                        />
                        <FormInput
                            inputType="password"
                            label="password"
                            {...register("password", { required: "Password is required" })}
                            errors={errors.password}
                        />
                        <FormInput
                            label="photo"
                            {...register("photo", { required: "Photo is required" })}
                            errors={errors.photo}
                        />
                        <FormInput
                            label="curriculum"
                            {...register("curriculum", { required: "Curriculum is required" })}
                            errors={errors.curriculum}
                        />

                        <FormActButton buttonLabel="Criar Conta" />
                    </>
                </FormSteps>
            </FormInputGroup>
        </FormWrapper>
    );
};
