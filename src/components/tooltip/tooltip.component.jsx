import React from "react";

import "./tooltip.component.css";

const Tooltip = ({
  className = "",
  overlayClassName = "",
  children,
  direction = "left",
  title,
}) => {
  return (
    <div className={`tooltip flex ${className}`}>
      {children}
      <div className={`tooltip-title ${direction} ${overlayClassName}`}>
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
