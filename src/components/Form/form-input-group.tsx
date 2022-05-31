import React from "react";
import "./style.css";

interface FormInputGroupProps {
    children: React.ReactNode;
}

export const FormInputGroup = ({ children }: FormInputGroupProps) => {
    return <div className="form-fields-group">{children}</div>;
};
