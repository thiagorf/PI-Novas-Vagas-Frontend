import { RiArrowRightLine } from "react-icons/ri";

export const NextButton = ({ handleNextStep }: { handleNextStep: () => void }) => {
    return (
        <button onClick={handleNextStep} type="button" className="next-button">
            <span>Próximo</span>
            <RiArrowRightLine size={16} className="right-icon-align" />
        </button>
    );
};
