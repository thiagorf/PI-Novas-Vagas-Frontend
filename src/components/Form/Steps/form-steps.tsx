import React, { Children, useEffect } from "react";
import "./style.css";

interface FormStepsControl {
    children: React.ReactNode;
    steps: number;
    setTotalSteps: React.Dispatch<React.SetStateAction<number>>;
}

export const FormSteps = ({ children, steps, setTotalSteps }: FormStepsControl) => {
    const stepsContent = Children.toArray(children);

    useEffect(() => {
        setTotalSteps(stepsContent.length);
    }, []);

    return (
        <>
            {Children.map(stepsContent, (child, index) => {
                if (index === steps) {
                    return child;
                }
            })}
        </>
    );
};
