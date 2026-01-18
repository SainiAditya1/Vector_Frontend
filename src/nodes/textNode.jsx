
import { useState, useEffect, useCallback, useRef } from "react";
import { Handle, Position } from "reactflow";
import NodeContainer from "../components/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

 
  const extractVariables = useCallback((text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1]); 
    }
    return Array.from(matches);
  }, []);


  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  };


  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    const detectedVariables = extractVariables(newText);
    setHandles(detectedVariables);
    autoResize();
  };

  useEffect(() => {
    updateNodeField(id, "text", currText);
  }, [id, currText, updateNodeField]);


  useEffect(() => {
    const detectedVariables = extractVariables(currText);
    setHandles(detectedVariables);
    
    setTimeout(autoResize, 0); 
  }, []);

  return (
    <NodeContainer
      heading="Text"
      type={NODE_TYPES.TEXT}
      id={id}
      outputHandles={["output"]} 
      infoAvailable={true}
      infoContent="Define variables using {{variableName}}. Dynamic handles will be created for each variable."
    >
      <div className="flex flex-col gap-2 relative">
        <label className="text-xs font-medium text-muted-foreground">
          Text Content
        </label>
        
        <textarea
          ref={textareaRef}
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-hidden min-h-[80px]"
          value={currText}
          onChange={handleTextChange}
          placeholder="Type something... use {{input}} to create variables."
          style={{ transition: "height 0.2s ease" }}
        />

   
        {handles.map((handleName, index) => (
          <div
            key={handleName}
            className="absolute left-0"
           
            style={{ 
              top: `${(index + 1) * 25 + 40}px`, 
              left: "-18px" 
            }} 
          >
             
            <Handle
              type="target"
              position={Position.Left}
              id={handleName}
              className="!w-3 !h-3 !bg-blue-500 hover:!bg-blue-600"
              title={`Connect to ${handleName}`}
            />
          
            <span className="absolute left-[-8px] top-[-15px] text-[10px] text-muted-foreground whitespace-nowrap bg-background px-1 rounded border">
              {handleName}
            </span>
          </div>
        ))}
      </div>
    </NodeContainer>
  );
};