import React from "react";
import "./style.css";

export const UsersContent = ({ children, title }: { children: React.ReactNode; title: string }) => {
    return (
        <div className="users-content">
            {title && <h1>{title}</h1>}
            <div className="user-data">{children}</div>
        </div>
    );
};
