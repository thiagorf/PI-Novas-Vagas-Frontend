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
        const formData = new FormData();

        console.log(data.photo[0]);

        for (const [key, value] of Object.entries(data)) {
            if (key === "photo" || key == "curriculum") {
                console.log(value[0]);

                formData.append(key, value[0]);
            }
            formData.append(key, value);
        }

        const response = await api({
            method: "POST",
            url: "/v1/applicants",
            data: formData,
            headers: { "content-type": "multipart/form-data" },
        });
        console.log(response.data);
        navigate("/");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptRegister)} encType="multipart/form-data">
            <FormInputGroup>
                <FormSteps steps={steps} setTotalSteps={setQuantity}>
                    <>
                        <h1>Criar uma conta</h1>
                        <FileInput {...register("photo", { required: "Foto é obrigatório" })} errors={errors.photo} />
                        <FormInput
                            label="Nome"
                            {...register("name", { required: "Nome é obrigatório" })}
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
                            {...register("email", { required: "Email é obrigatório" })}
                            errors={errors.email}
                        />
                        <FormInput
                            inputType="password"
                            label="Senha"
                            {...register("password", { required: "Senha é obrigatório" })}
                            errors={errors.password}
                        />
                        {/*
                        <FormInput
                            label="photo"
                            {...register("photo", { required: "Photo is required" })}
                            errors={errors.photo}
                        />*/}
                        {/* <FormInput
                            inputType="file"
                            label="curriculum"
                            {...register("curriculum", { required: "Curriculum is required" })}
                            errors={errors.curriculum}
    />*/}
                        <label htmlFor="curriculum">Carregar curriculo</label>
                        <input
                            type="file"
                            {...register("curriculum", { required: "Currículo é necessário" })}
                            id="curriculum"
                        />
                        {errors.curriculum && <p className="input-field-error">{errors.curriculum.message}</p>}

                        <FormActButton buttonLabel="Criar Conta" />
                    </>
                </FormSteps>
            </FormInputGroup>
        </FormWrapper>
    );
};
