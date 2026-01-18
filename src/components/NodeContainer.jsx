
import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; 
import { cn } from "../lib/utils"; 
import { Info, X } from "lucide-react"; 

const NodeContainer = ({
  className,
  heading,
  type,
  id,
  infoAvailable,
  infoContent, 
  inputHandles = [],
  outputHandles = [],
  children,
  onDelete, 
}) => {
  return (
<Card className={cn("w-[220px] border-2 border-gray-400 shadow-sm bg-background", className)}>
      
    
      {inputHandles.map((handleId, index) => (
        <Handle
          key={`${id}-input-${handleId}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handleId}`}
          style={{ top: `${((index + 1) / (inputHandles.length + 1)) * 100}%` }}
          className="w-2 h-2 bg-primary border border-background -left-1.5" 
        />
      ))}


      <CardHeader className="p-2 pb-1 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <CardTitle className="text-xs font-bold leading-none tracking-tight">
            {heading}
          </CardTitle>
          
          {infoAvailable && (
             <div className="group relative">
                <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                {infoContent && (
                  <div className="absolute left-4 top-0 w-40 p-1.5 bg-popover text-popover-foreground text-[10px] rounded shadow-md hidden group-hover:block z-50 border">
                      {infoContent}
                  </div>
                )}
             </div>
          )}
        </div>
     
        {onDelete && (
           <button onClick={() => onDelete(id)} className="text-muted-foreground hover:text-destructive">
               <X className="w-3 h-3" />
           </button>
        )}
      </CardHeader>

    
      <CardContent className="p-2 pt-1 space-y-2">
        {children}
      </CardContent>

   
      {outputHandles.map((handleId, index) => (
        <Handle
          key={`${id}-output-${handleId}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handleId}`}
          style={{ top: `${((index + 1) / (outputHandles.length + 1)) * 100}%` }}
          className="w-2 h-2 bg-primary border border-background -right-1.5" // Smaller handle dots
        />
      ))}
    </Card>
  );
};

export default NodeContainer;