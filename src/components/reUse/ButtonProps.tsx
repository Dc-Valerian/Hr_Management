import React from "react";

interface ButtonProp {
  label: string;
  disabled?: boolean;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
}

const ButtonProps: React.FC<ButtonProp> = ({
  label,
  className = "",
  backgroundColor = "bg-blue-500",
  textColor = "text-white",
  width = "w-auto",
}) => {
  return (
    <button
      className={`px-4 py-2 ${backgroundColor} ${textColor} ${width} hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className} text-[15px] font-[700]`}
    >
      {label}
    </button>
  );
};

export default ButtonProps;
