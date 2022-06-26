import { SubmitHandler, useForm } from "react-hook-form";
import { FormActButton, FormInput, FormInputGroup } from "../../../../components";
import api from "../../../../services/api";
import { CreateJobData } from "./create-job-types";
import "./style.css";

const fullWidth = {
    width: "100%",
};

export const CreateJob = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateJobData>();

    const formatToIsoString = (date: string) => {
        return new Date(date).toISOString();
    };

    const attemptCreateJob: SubmitHandler<CreateJobData> = async (data) => {
        // eslint-disable-next-line camelcase
        const formatedData: CreateJobData = { ...data, ends_at: formatToIsoString(data.ends_at) };
        const response = await api.post("/v1/jobs", formatedData);
        console.log(response.data);
    };

    return (
        <div className="create-job-wrapper">
            <form onSubmit={handleSubmit(attemptCreateJob)}>
                <FormInputGroup style={fullWidth}>
                    <h1>Criar vaga</h1>
                    <FormInput
                        label="Titulo"
                        {...register("title", { required: "Title is required" })}
                        errors={errors.title}
                    />
                    <FormInput
                        label="Endereço"
                        {...register("address", { required: "Address is required" })}
                        errors={errors.address}
                    />
                    <div className="create-job-separator">
                        <FormInput
                            label="Salario"
                            {...register("salary", { required: "Salary is required" })}
                            errors={errors.salary}
                        />
                        <FormInput
                            inputType="date"
                            label="Termina em"
                            {...register("ends_at", { required: "Ends at is required" })}
                            errors={errors.ends_at}
                        />
                    </div>
                    <FormInput
                        label="Descrição"
                        {...register("description", { required: "Description is required" })}
                        errors={errors.description}
                    />
                </FormInputGroup>
                <FormActButton buttonLabel="Criar vaga" />
            </form>
        </div>
    );
};
