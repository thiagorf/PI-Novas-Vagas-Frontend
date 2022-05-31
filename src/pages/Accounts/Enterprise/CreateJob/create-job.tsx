import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../../../services/api";
import { CreateJobData } from "./create-job-types";

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
        <div>
            <form onSubmit={handleSubmit(attemptCreateJob)}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" {...register("title", { required: true })} />
                        {errors.title && <p>{errors.title.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label>
                        <input type="text" {...register("salary", { required: true })} />
                        {errors.salary && <p>{errors.salary.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" {...register("address", { required: true })} />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" {...register("description", { required: true })} />
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="ends_at">Ends at</label>
                        <input type="date" {...register("ends_at", { required: true })} />
                        {errors.ends_at && <p>{errors.ends_at.message}</p>}
                    </div>
                </div>
                <button type="submit">Create Job</button>
            </form>
        </div>
    );
};
