import React from "react";
import { Routes, Route } from "react-router-dom";
import { CommonLogin, CommonRegister } from "../pages/common";
import { EnterpriseLogin, EnterpriseRegister } from "../pages/enterprise";
import { CreateJob } from "../pages/enterprise/CreateJob/create-job";
import Login from "../pages/Login/enterprise-login";
import { Main } from "../pages/Main";
import { ProtectedRoute } from "../pages/protected/ProtectedRoute";
import { Wrapper } from "../pages/protected/Wrapper";
import UpdateVaga from "../pages/UpdateVaga/UpdateVaga";
import { PageLayout } from "./PageLayout";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/applicant-login" element={<CommonLogin />} />
                <Route path="/enterprise-login" element={<EnterpriseLogin />} />
                <Route path="/applicant-register" element={<CommonRegister />} />
                <Route path="/enterprise-register" element={<EnterpriseRegister />} />
                <Route
                    path="/login"
                    element={
                        <React.Suspense fallback={<div>....</div>}>
                            <Login />
                        </React.Suspense>
                    }
                />
                <Route element={<PageLayout />}>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback={<div>.Loading</div>}>
                                <Main />
                            </React.Suspense>
                        }
                    />
                    <Route path="/vagas/:id" element={<UpdateVaga />} />
                </Route>
                <Route path="/protected" element={<ProtectedRoute Component={Wrapper} role="enterprise" />} />
                <Route path="/create-job" element={<ProtectedRoute Component={CreateJob} role="enterprise" />} />
            </Routes>
        </>
    );
}

export default Router;
