import React from "react";
import { AlignIcon } from "./align-icon";

export const LeftIconText = ({ children, icon }: { children: React.ReactNode; icon: React.ComponentType }) => {
    return (
        <p>
            <AlignIcon Icon={icon} />
            {children}
        </p>
    );
};
