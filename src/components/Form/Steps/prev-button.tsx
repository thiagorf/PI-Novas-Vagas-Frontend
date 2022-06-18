import { RiArrowLeftLine } from "react-icons/ri";

export const PrevButton = ({ handlePrevStep }: { handlePrevStep: () => void }) => {
    return (
        <button onClick={handlePrevStep} type="button" className="prev-button">
            <RiArrowLeftLine size={16} className="left-icon-align" />
            <span>Voltar</span>
        </button>
    );
};
