import React from "react";
import "./style.css";

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="content">{children}</div>;
};
