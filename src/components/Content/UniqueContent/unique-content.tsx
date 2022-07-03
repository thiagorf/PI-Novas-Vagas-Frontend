import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { SideBarWrapper } from "../../SideBar";
import { ContentWrapper } from "../ContentList";
import { OneJobData } from "./type";
import { DateFomat } from "../../../util";
import {
    RiCalendarEventLine,
    RiFacebookBoxLine,
    RiLinkedinBoxLine,
    RiMailLine,
    RiMapPin2Line,
    RiMoneyDollarCircleLine,
    RiPhoneLine,
    RiTwitterLine,
} from "react-icons/ri";
import api from "../../../services/api";
import "./style.css";
import { LeftIconText } from "../../Aligment";
import { currencyFormat } from "../../../util/currency-format";

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
            navigate("/");
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
    // check if the auth user already applied
    return (
        <>
            <div className="unique-sidebar">
                <div className="unique-sidebar-wrapper">
                    <div className="unique-sidebar-separator">
                        <div className="job-info-wrapper job-header-info">
                            <h3>Informações adicionais</h3>
                            <div>
                                <LeftIconText icon={RiCalendarEventLine}>
                                    Postado em {DateFomat(data.started_at)}
                                </LeftIconText>
                                <LeftIconText icon={RiMoneyDollarCircleLine}>
                                    Salário de {currencyFormat(data.salary)}
                                </LeftIconText>
                                <LeftIconText icon={RiMapPin2Line}>{data.address}</LeftIconText>
                            </div>
                        </div>
                        <div className="job-info-wrapper">
                            <h3>Siga {data.enterprise.name}</h3>
                            <div>
                                <LeftIconText icon={RiLinkedinBoxLine}>{data.enterprise.name}</LeftIconText>
                                <LeftIconText icon={RiFacebookBoxLine}>{data.enterprise.name}</LeftIconText>
                                <LeftIconText icon={RiTwitterLine}>@{data.enterprise.name}</LeftIconText>
                            </div>
                        </div>
                        <div className="job-info-wrapper">
                            <h3>Contatos</h3>
                            <div>
                                <LeftIconText icon={RiPhoneLine}>24 99899-9999</LeftIconText>
                                <LeftIconText icon={RiMailLine}>{data.enterprise.email}</LeftIconText>
                            </div>
                        </div>
                    </div>
                    <button className="job-sidebar-cta" onClick={applyToAJob}>
                        Se candidatar
                    </button>
                </div>
            </div>

            <div className="unique-content">
                <div className="one-job-content">
                    <h2>{data.title}</h2>
                    <h3>
                        {data.enterprise.name}, {data.address}
                    </h3>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    );
};
