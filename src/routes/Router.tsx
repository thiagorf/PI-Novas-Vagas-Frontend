import { Routes, Route } from "react-router-dom";
import { UniqueContent } from "../components/Content";
import { ApplicantJobs, ApplicantLogin, ApplicantRegister } from "../pages/Accounts/Applicant";
import { CreateJob, EnterpriseJobs, EnterpriseLogin, EnterpriseRegister } from "../pages/Accounts/Enterprise";
import { Main } from "../pages/Main";
import { ProtectedRoute } from "../pages/protected/ProtectedRoute";
import { Wrapper } from "../pages/protected/Wrapper";
import { PageLayout } from "./PageLayout";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/applicant-login" element={<ApplicantLogin />} />
                <Route path="/enterprise-login" element={<EnterpriseLogin />} />
                <Route path="/applicant-register" element={<ApplicantRegister />} />
                <Route path="/enterprise-register" element={<EnterpriseRegister />} />
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Main />} />
                </Route>
                <Route path="/applied-jobs" element={<ProtectedRoute Component={ApplicantJobs} role="applicant" />} />
                <Route path="/protected" element={<ProtectedRoute Component={Wrapper} role="enterprise" />} />
                <Route path="/create-job" element={<ProtectedRoute Component={CreateJob} role="enterprise" />} />
                <Route path="/job/:id" element={<UniqueContent />} />
                <Route
                    path="/enterprise-jobs"
                    element={<ProtectedRoute Component={EnterpriseJobs} role="enterprise" />}
                />
            </Routes>
        </>
    );
}

export default Router;
