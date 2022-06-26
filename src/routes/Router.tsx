import { Routes, Route } from "react-router-dom";
import { UniqueContent } from "../components/Content";
import { ApplicantJobs, ApplicantLogin, ApplicantRegister } from "../pages/Accounts/Applicant";
import {
    CreateJob,
    EnterpriseJobs,
    EnterpriseLogin,
    EnterpriseOneJob,
    EnterpriseRegister,
} from "../pages/Accounts/Enterprise";
import { ProtectedRoute, Wrapper } from "../pages/protected";
import { PageLayout } from "./PageLayout";
import { Main } from "../pages/Main";

function Router() {
    return (
        <Routes>
            <Route path="/applicant-login" element={<ApplicantLogin />} />
            <Route path="/enterprise-login" element={<EnterpriseLogin />} />
            <Route path="/applicant-register" element={<ApplicantRegister />} />
            <Route path="/enterprise-register" element={<EnterpriseRegister />} />
            <Route element={<PageLayout />}>
                <Route path="/" element={<Main />} />
                <Route path="/job/:id" element={<UniqueContent />} />
                <Route path="/applied-jobs" element={<ProtectedRoute Component={ApplicantJobs} role="applicant" />} />
                <Route
                    path="/enterprise-jobs"
                    element={<ProtectedRoute Component={EnterpriseJobs} role="enterprise" />}
                />
                <Route
                    path="/enterprise-one-job/:id"
                    element={<ProtectedRoute Component={EnterpriseOneJob} role="enterprise" />}
                />
                <Route path="/create-job" element={<ProtectedRoute Component={CreateJob} role="enterprise" />} />
            </Route>
            <Route path="/protected" element={<ProtectedRoute Component={Wrapper} role="enterprise" />} />
        </Routes>
    );
}

export default Router;
