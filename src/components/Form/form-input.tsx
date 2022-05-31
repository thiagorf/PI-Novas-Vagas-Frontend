import { forwardRef } from "react";
import { FieldError, RefCallBack, UseFormRegisterReturn } from "react-hook-form";
import "./style.css";

interface CustomHookBehavior extends UseFormRegisterReturn {
    errors: FieldError;
    label: string;
}

export const FormInput = forwardRef(function FormInput(
    { label, errors, name, onChange, onBlur }: CustomHookBehavior,
    ref: RefCallBack,
) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input name={name} onChange={onChange} onBlur={onBlur} ref={ref} />
            {errors && <p className="input-field-error">{errors.message}</p>}
        </div>
    );
});
