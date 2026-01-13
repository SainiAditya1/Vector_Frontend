import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import InputBox from "../components/InputBox";
import { NODE_TYPES } from "../utils/constants";
import { useStore } from "../store";

export const LLMNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || "This is a LLM.");

  const handleTextChange = useCallback((e) => {
    setCurrText(e.target.value);
  }, []);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [id, currText, updateNodeField]);

  return (
    <NodeContainer
      heading="LLM"
      type={NODE_TYPES.LLM}
      id={id}
      inputHandles={["system", "prompt"]}
      outputHandles={["response"]}
      infoAvailable={true}
    >
      <div className="mb-2">
        <span className="text-xs text-muted-foreground">This is a LLM.</span>
      </div>
      
      <InputBox
        label="Model Name" 
        type="text"
        value={currText}
        onChange={handleTextChange}
      />
    </NodeContainer>
  );
};