import React, { useId } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const InputBox = ({ label, type = "text", className = "", ...props }) => {
  const id = useId();

  return (
    <div className={`grid w-full items-center gap-1.5 ${className}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input 
        type={type} 
        id={id} 
        {...props} 
      />
    </div>
  );
};

export default InputBox;