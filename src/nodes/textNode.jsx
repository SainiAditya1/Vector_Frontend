import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import InputBox from "../components/InputBox";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = useCallback((e) => {
    setCurrText(e.target.value);
  }, []);

  
  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [id, currText, updateNodeField]);

  return (
    <NodeContainer
      heading="Text"
      type={NODE_TYPES.TEXT} 
      id={id}
      outputHandles={["output"]}
      infoAvailable={true}
    >
      <InputBox
        label="Text"
        type="text"
        value={currText}
        onChange={handleTextChange}
      />
    </NodeContainer>
  );
};