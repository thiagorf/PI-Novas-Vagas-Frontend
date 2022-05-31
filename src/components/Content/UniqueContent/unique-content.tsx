import { useMutation, useQuery } from "react-query";
import api from "../../../services/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const UniqueContent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { signed } = useAuth();
    const mutation = useMutation(() => {
        return api.post(`/v1/jobs/${id}/apply`);
    });
    const { data, error, isLoading } = useQuery("unique-jobs", async () => {
        const response = await api.get(`/v1/jobs/${id}`);

        return response.data;
    });

    const applyToAJob = () => {
        if (signed) {
            mutation.mutate();
            return;
        }

        // eslint-disable-next-line spaced-comment
        //check replace necessity
        navigate("/applicant-login", {
            replace: true,
            state: {
                from: location,
            },
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {JSON.stringify(data)}
            <button onClick={applyToAJob}>apply</button>
        </div>
    );
};
