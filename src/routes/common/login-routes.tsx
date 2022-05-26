import { Route } from "react-router-dom"
import { CommonLogin } from "../../pages/common"
import { EnterpriseLogin } from "../../pages/enterprise"

export const LoginRoutes = () => {

    return (
        <>
            <Route path="/applicant-login" element={CommonLogin} />
            <Route path="/enterprise-login" element={EnterpriseLogin}/>
        </>
    )
}