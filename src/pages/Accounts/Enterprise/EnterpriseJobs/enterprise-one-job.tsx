import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ContentWrapper, SideBarWrapper } from "../../../../components";
import { useAuth } from "../../../../hooks";
import api from "../../../../services/api";
import { ApplicantCard } from "./ApplicantCard";
import "./style.css";
import { OneJobForEnterprise } from "./types";

export const EnterpriseOneJob = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery<OneJobForEnterprise>("enterprise-one-job", async () => {
        const response = await api.get(`/v1/enterprises/${user.id}/jobs/${id}`);

        return response.data;
    });

    if (isError) {
        return <div>Error...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SideBarWrapper>
                <h3 id="card-title">Candidatos interessados</h3>
                <div className="cards-separator">
                    {data.applicants.length === 0 ? (
                        <p>Nenhum candidato interessado até o momento</p>
                    ) : (
                        <>
                            {data.applicants.map((applicant, index) => (
                                <ApplicantCard {...applicant} key={index} />
                            ))}
                        </>
                    )}
                </div>
            </SideBarWrapper>

            <ContentWrapper>
                <div className="enterprise-one-content-information">
                    <h2>{data.title}</h2>
                    <h3>
                        {user.name}, {data.address}
                    </h3>
                    <p>{data.description}</p>
                </div>
            </ContentWrapper>
        </>
    );
};
