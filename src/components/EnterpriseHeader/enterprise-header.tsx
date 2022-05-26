import { DefaultHeader } from "../Header/default-header"
import { EnterpriseHeaderOptions } from "./enterprise-header-options"

export const EnterpriseHeader = () => {
    return <DefaultHeader Component={EnterpriseHeaderOptions}/>
}