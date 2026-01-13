import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardContent } from "./ui/card";
import NodeHeading from "./NodeHeading";
import { cn } from "../lib/utils"; 

const NodeContainer = ({
  className,
  heading,
  type,
  id,
  infoAvailable,
  inputHandles = [],
  outputHandles = [],
  children,
}) => {
  return (
    <Card className={cn("w-[250px] border-2 shadow-sm bg-background", className)}>
      
      {inputHandles.map((handleId, index) => (
        <Handle
          key={`${id}-input-${handleId}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handleId}`}
         
          style={{ top: `${((index + 1) / (inputHandles.length + 1)) * 100}%` }}
          className="w-3 h-3 bg-primary border-2 border-background"
        />
      ))}

     
      <NodeHeading
        heading={heading}
        type={type}
        id={id}
        infoAvailable={infoAvailable}
      />

    
      <CardContent className="p-3 space-y-2">
        {children}
      </CardContent>

     
      {outputHandles.map((handleId, index) => (
        <Handle
          key={`${id}-output-${handleId}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handleId}`}
          style={{ top: `${((index + 1) / (outputHandles.length + 1)) * 100}%` }}
          className="w-3 h-3 bg-primary border-2 border-background"
        />
      ))}
    </Card>
  );
};

export default NodeContainer;