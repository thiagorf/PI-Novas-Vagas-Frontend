import { DefaultHeader } from "../Default";
import { ApplicantHeaderOptions } from "./applicant-header-options";

export const CommonHeader = () => {
    return <DefaultHeader Component={ApplicantHeaderOptions} />;
};
