import { DefaultHeader } from "../Header/default-header";
import { CommonHeaderOptions } from "./common-header-options";

export const CommonHeader = () => {
    return <DefaultHeader Component={CommonHeaderOptions} />;
};
