import React from "react";
import "./style.css";

export const SideBarWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-content-wrapper">{children}</div>
        </div>
    );
};
