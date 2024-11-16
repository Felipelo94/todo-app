import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  variant?: "primary" | "outlined" | "success";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {children && children}
    </button>
  );
};

export default Button;
