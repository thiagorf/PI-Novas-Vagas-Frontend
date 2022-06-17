import { useState } from "react";

interface StepsInit {
    stepQty: number;
}

interface useFormStepsReturns {
    steps: number;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    showStepContent: (intendedStep: number) => boolean;
}

export const useFormSteps = ({ stepQty }: StepsInit): useFormStepsReturns => {
    const [steps, setSteps] = useState(1);

    const showStepContent = (intendedStep: number) => {
        if (intendedStep === steps) {
            return true;
        }

        return false;
    };

    const handleNextStep = () => {
        if (steps + 1 > stepQty) {
            return;
        }

        setSteps((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        if (steps - 1 === 0) {
            return;
        }

        setSteps((prev) => prev - 1);
    };

    return { steps, handleNextStep, handlePrevStep, showStepContent };
};
