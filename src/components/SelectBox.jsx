// src/components/SelectBox.jsx

import React, { useId } from "react";
import { Label } from "./ui/label"; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"; 

const SelectBox = ({
  label,
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Select an option",
}) => {
  const id = useId();

  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      {label && (
        <Label htmlFor={id} className="text-xs font-medium text-muted-foreground">
          {label}
        </Label>
      )}
      
      <Select value={value} onValueChange={onChange}>
        {/* FIXES APPLIED:
           1. !bg-white !text-black: Forces the box to be white with black text (overrides dark theme).
           2. w-full: Ensures it takes full width of the parent.
           3. border-input: Adds the grey border back.
           4. overflow-hidden: Prevents the long text from breaking the layout.
        */}
        <SelectTrigger 
          id={id} 
          className="w-full !bg-white !text-black border border-input shadow-sm nodrag h-9"
        >
          {/* text-ellipsis ensures long names like "OpenAI Embedding..." get truncated with "..." instead of overflowing */}
          <div className="truncate">
             <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        
        {/* Ensure the dropdown menu is also white */}
        <SelectContent className="!bg-white !text-black border border-input">
          {options.map((opt) => {
            const optionValue = typeof opt === 'object' ? opt.value : opt;
            const optionLabel = typeof opt === 'object' ? opt.label : opt;

            return (
              <SelectItem 
                key={optionValue} 
                value={optionValue}
                className="cursor-pointer hover:!bg-gray-100"
              >
                {optionLabel}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;