import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import { useStore } from "../store";

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((value) => {
    setOutputType(value);
  }, []);

  useEffect(() => {
    updateNodeField(id, 'outputName', currName);
  }, [id, currName, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'outputType', outputType);
  }, [id, outputType, updateNodeField]);

  return (
    <NodeContainer
      heading="Output"
      type={NODE_TYPES.OUTPUT}
      id={id}
      inputHandles={["value"]}
      infoAvailable={true}
    >
      <InputBox
        label="Name"
        type="text" 
        value={currName}
        onChange={handleNameChange}
      />
      <SelectBox
        label="Output Type"
        options={INPUT_OPTIONS}
        value={outputType}
        onChange={handleTypeChange}
      />
    </NodeContainer>
  );
};