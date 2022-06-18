import { ChangeEvent, useState } from "react";
import { RiFileAddLine, RiFileUploadLine } from "react-icons/ri";

export const FileInput = () => {
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
            <label htmlFor="file">
                carregar foto <RiFileUploadLine size={16} className="align-icon" />
            </label>
            <input type="file" id="file" onChange={showPreview} />
        </div>
    );
};
