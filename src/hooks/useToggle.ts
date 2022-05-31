import { useState } from "react";

interface UseToggleReturn {
    toggle: boolean;
    handleToggle: () => void;
}

export const useToggle = (): UseToggleReturn => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return { toggle, handleToggle };
};
