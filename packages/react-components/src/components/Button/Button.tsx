import React from "react";
import "./Button.less"; // 引入样式文件

export interface ButtonProps {
  type?: "primary" | "default" | "danger";
  size?: "large" | "middle" | "small";
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  size = "middle",
  loading = false,
  disabled = false,
  icon,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button-${type} button-${size} ${loading ? "is-loading" : ""} ${disabled ? "is-disabled" : ""}`}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading && <span className="loading-spinner"></span>}
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
