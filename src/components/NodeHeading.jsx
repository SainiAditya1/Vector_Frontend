import React, { useCallback } from "react";
import { useStore } from "../store";
import { useShallow } from "zustand/react/shallow"; 
import { CircleX, Info, Box } from "lucide-react"; 
import { CardHeader, CardTitle } from "./ui/card";

const selector = (state) => ({
  removeNode: state.removeNode,
});

const NodeHeading = ({
  id,
  type = "grid",
  heading = "Node",
  infoAvailable = false,
  infoContent = "Information",
  className = "",
}) => {
  
  const { removeNode } = useStore(useShallow(selector));

  
  const handleRemove = useCallback(() => {
    if (id) {
      removeNode(id);
    }
  }, [id, removeNode]);

  return (
    <CardHeader className={`p-4 py-2 ${className}`}>
      <div className="flex items-center justify-between w-full">

        <div className="flex items-center gap-2">
          
          <Box className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-sm font-semibold text-foreground">
            {heading}
          </CardTitle>
        </div>

        <div className="flex items-center gap-1">
          
       
          {infoAvailable && (
            <div className="relative group">
              <Info className="w-4 h-4 text-muted-foreground cursor-help hover:text-primary transition-colors" />
             
              <div className="absolute right-0 top-6 w-48 p-2 mt-1 text-xs text-popover-foreground bg-popover border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none group-hover:pointer-events-auto">
                {infoContent}
              </div>
            </div>
          )}

          
          <button
            onClick={handleRemove}
            type="button"
            className="p-1 ml-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
            aria-label="Remove node"
          >
            <CircleX className="w-4 h-4" />
          </button>
        </div>
        
      </div>
    </CardHeader>
  );
};

export default NodeHeading;