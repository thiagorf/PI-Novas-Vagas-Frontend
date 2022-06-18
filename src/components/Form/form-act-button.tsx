import "./style.css";

interface ButtonProps extends React.ComponentProps<"button"> {
    buttonLabel: string;
}

export const FormActButton = ({ buttonLabel, ...buttonProps }: ButtonProps) => {
    return (
        <button className="form-act" type="submit" {...buttonProps}>
            {buttonLabel}
        </button>
    );
};
