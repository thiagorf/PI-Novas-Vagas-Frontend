import React, { HTMLAttributes } from "react";
import "./style.css";

export const AlignIcon = ({ Icon }: { Icon: React.ComponentType<HTMLAttributes<SVGAElement>> }) => {
    return <Icon className="svg-font-align" />;
};
