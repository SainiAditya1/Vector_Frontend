import React, { useId } from "react";
import { Label } from "./ui/label"
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
    <div className={`grid w-full items-center gap-1.5 ${className}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="w-full nodrag">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => {
            const optionValue = typeof opt === 'object' ? opt.value : opt;
            const optionLabel = typeof opt === 'object' ? opt.label : opt;

            return (
              <SelectItem key={optionValue} value={optionValue}>
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