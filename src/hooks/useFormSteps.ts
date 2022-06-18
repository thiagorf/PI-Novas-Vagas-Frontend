import { useState } from "react";

interface useFormStepsReturns {
    steps: number;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    setQuantity: (stepsLength: number) => void;
}

export const useFormSteps = (): useFormStepsReturns => {
    const [steps, setSteps] = useState(0);
    const [stepsQuantity, setStepsQuantity] = useState(0);

    const handleNextStep = () => {
        if (steps + 1 > stepsQuantity) {
            return;
        }

        setSteps((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        if (steps - 1 < 0) {
            return;
        }

        setSteps((prev) => prev - 1);
    };

    const setQuantity = (stepsLength: number) => {
        setStepsQuantity(stepsLength);
    };

    return { steps, handleNextStep, handlePrevStep, setQuantity };
};
