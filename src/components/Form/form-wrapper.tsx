import React from "react";
import "./style.css";

interface CustomFormBehavior extends React.ComponentProps<"form"> {
    children: React.ReactNode;
}

export const FormWrapper = ({ children, ...formProps }: CustomFormBehavior) => {
    return (
        <div className="form-wrapper">
            <form {...formProps}>{children}</form>
        </div>
    );
};
