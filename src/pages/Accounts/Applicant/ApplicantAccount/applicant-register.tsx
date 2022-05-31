import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { ApplicantRegisterProps } from "./applicant-types";
import "../../../../components/Form/style.css";
import { FormActButton, FormInput, FormInputGroup, FormWrapper } from "../../../../components/Form";

export const ApplicantRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ApplicantRegisterProps>();
    const navigate = useNavigate();

    const attemptRegister: SubmitHandler<ApplicantRegisterProps> = async (data) => {
        const response = await api.post("/v1/applicants", data);
        console.log(response.data);
        navigate("/");
    };

    return (
        <FormWrapper onSubmit={handleSubmit(attemptRegister)}>
            <FormInputGroup>
                <h2>Register an account</h2>
                <FormInput label="name" {...register("name", { required: "Name is required" })} errors={errors.name} />
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
            </FormInputGroup>
            <span className="form-redirect">
                Already have an account?<Link to="/applicant-login">Sign In</Link>
            </span>
            <FormActButton buttonLabel="REGISTER" />
        </FormWrapper>
    );
};
