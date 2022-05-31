import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { ApplicantRegisterProps } from "./applicant-types";
import "../../../../components/Form/style.css";

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
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(attemptRegister)}>
                <div className="form-fields-group">
                    <h2>Register an account</h2>
                    <div className="input-field">
                        <label htmlFor="name">Name: </label>
                        <input type="text" {...register("name", { required: true })} />
                        {errors.name && <p className="input-field-error">{errors.name.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="text" {...register("email", { required: true })} />
                        {errors.email && <p className="input-field-error">{errors.email.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <p className="input-field-error">{errors.password.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="photo">Photo: </label>
                        <input type="text" {...register("photo", { required: true })} />
                        {errors.photo && <p className="input-field-error">{errors.photo.message}</p>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="curriculum">Curriculum: </label>
                        <input type="text" {...register("curriculum", { required: true })} />
                        {errors.curriculum && <p className="input-field-error">{errors.curriculum.message}</p>}
                    </div>
                    <span className="form-redirect">
                        Already have an account?<Link to="/applicant-login">Sign In</Link>
                    </span>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
