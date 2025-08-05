"use client";
import { collapseMultipleSpaces, removeLeadingSpaces } from "@/constants/regs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "fullRounded";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  variant = "default",
  onChange,
  ...rest
}: InputProps) {
  const baseStyles =
    "w-full px-4 py-2 transition bg-transparent font-bold text-foreground hover:opacity-80";
  const variants = {
    default: "rounded-none",
    fullRounded: "rounded-full",
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    event.target.value = value
      .replace(removeLeadingSpaces, "")
      .replace(collapseMultipleSpaces, " ");
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      className={`${baseStyles} ${variants[variant]} shadow-inputShadow`}
      onInput={handleInput}
      {...rest}
    />
  );
}
