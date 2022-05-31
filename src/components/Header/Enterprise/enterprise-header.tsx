import { DefaultHeader } from "../Default";
import { EnterpriseHeaderOptions } from "./enterprise-header-options";

export const EnterpriseHeader = () => {
    return <DefaultHeader Component={EnterpriseHeaderOptions} />;
};
