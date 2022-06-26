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
                    {/* data.applicants.map((applicant, index) => (
                        <ApplicantCard {...applicant} key={index} />
                    ))*/}
                    <ApplicantCard {...data.applicants[0]} />
                </div>
            </SideBarWrapper>

            <ContentWrapper>
                <h2>asa</h2>
            </ContentWrapper>
        </>
    );
};
