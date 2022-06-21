import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { SideBarWrapper } from "../../SideBar";
import { ContentWrapper } from "../ContentList";
import { OneJobData } from "./type";
import { DateFomat } from "../../../util";
import { RiCalendarEventLine } from "react-icons/ri";
import api from "../../../services/api";
import "./style.css";
import { LeftIconText } from "../../Aligment";

export const UniqueContent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const { signed } = useAuth();

    const mutation = useMutation(() => {
        return api.post(`/v1/jobs/${id}/apply`);
    });

    const { data, error, isLoading } = useQuery<OneJobData>("unique-jobs", async () => {
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
        <>
            <SideBarWrapper>
                <h3>Informações adicionais</h3>
                <div>
                    <LeftIconText icon={RiCalendarEventLine}>Postado em {DateFomat(data.started_at)}</LeftIconText>
                </div>
            </SideBarWrapper>
            <ContentWrapper>
                <div>
                    {JSON.stringify(data)}
                    <button onClick={applyToAJob}>apply</button>
                </div>
            </ContentWrapper>
        </>
    );
};
