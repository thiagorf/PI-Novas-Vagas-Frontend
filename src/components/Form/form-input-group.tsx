import React from "react";
import "./style.css";

interface FormIputGroupTypes extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const FormInputGroup = ({ children, ...props }: FormIputGroupTypes) => {
    return (
        <div className="form-fields-group" {...props}>
            {children}
        </div>
    );
};
