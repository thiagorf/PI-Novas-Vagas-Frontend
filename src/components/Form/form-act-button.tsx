import "./style.css";

interface ButtonProps {
    buttonLabel: string;
}

export const FormActButton = ({ buttonLabel }: ButtonProps) => {
    return (
        <button className="form-act" type="submit">
            {buttonLabel}
        </button>
    );
};
