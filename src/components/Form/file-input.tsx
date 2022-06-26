import React, { ChangeEvent, useState } from "react";
import { UseFormRegisterReturn, RefCallBack, FieldError } from "react-hook-form";
import { RiFileAddLine, RiFileUploadLine } from "react-icons/ri";

interface CustomFileBehavior extends UseFormRegisterReturn {
    errors: FieldError;
}

export const FileInput = React.forwardRef(function FileInput(
    { errors, name, onChange, onBlur }: CustomFileBehavior,
    ref: RefCallBack,
) {
    const [imageSrc, setImageSrc] = useState("");

    const showPreview = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files[0];

        setImageSrc(String(URL.createObjectURL(files)));
    };

    return (
        <div className="avatar-wrapper">
            <div className="avatar-img">
                {imageSrc ? <img src={imageSrc} alt="foto do usuário" /> : <RiFileAddLine />}
            </div>
            <label htmlFor={name}>
                carregar foto <RiFileUploadLine size={16} className="align-icon" />
            </label>
            <input
                type="file"
                id={name}
                onInput={showPreview}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
            />
            {errors && <p className="input-field-error">{errors.message}</p>}
        </div>
    );
});
