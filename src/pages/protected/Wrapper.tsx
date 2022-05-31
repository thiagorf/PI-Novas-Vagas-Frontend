import { useEffect } from "react";
import { EnterpriseHeader } from "../../components/Header/Enterprise/enterprise-header";
import api from "../../services/api";

export const Wrapper = () => {
    useEffect(() => {
        async function checkEnterpriseJobs() {
            const response = await api.get("/v1/enterprises/:id/jobs");
        }
    }, []);

    return (
        <div>
            <EnterpriseHeader />
            <div>teste</div>
        </div>
    );
};
