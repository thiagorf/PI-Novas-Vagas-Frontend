import { SubmitHandler, useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import api from "../../../services/api"
import { CommonRegisterProps } from "./common-types"

export const CommonRegister = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<CommonRegisterProps>()
    const navigate = useNavigate()

    const attemptRegister: SubmitHandler<CommonRegisterProps> = async (data) => {
        
        const response = await api.post("/v1/applicants", data);
        console.log(response.data)
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(attemptRegister)}>
                <div>
                    <h3>Register an account</h3>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" {...register("name", {required: true})}/>
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" {...register("email", {required: true})}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" {...register("password", {required: true})}/>
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="photo">Photo: </label>
                        <input type="text" {...register("photo", {required: true})}/>
                        {errors.photo && <p>{errors.photo.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="curriculum">Curriculum: </label>
                        <input type="text" {...register("curriculum", {required: true})}/>
                        {errors.curriculum && <p>{errors.curriculum.message}</p>}
                    </div>
                    <span>Already have an account?<Link to="">Sign In</Link></span>
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}