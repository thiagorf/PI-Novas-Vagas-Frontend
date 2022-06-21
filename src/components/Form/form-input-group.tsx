import React from "react";
import "./style.css";

export const FormInputGroup = ({ children }: { children: React.ReactNode }) => {
    return <div className="form-fields-group">{children}</div>;
};
