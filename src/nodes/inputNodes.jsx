import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import { INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((value) => {
    setInputType(value);
  }, []);

  useEffect(() => {
    updateNodeField(id, 'inputName', currName);
  }, [id, currName, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'inputType', inputType);
  }, [id, inputType, updateNodeField]);

  return (
    <NodeContainer
      heading="Input"
      type={NODE_TYPES.INPUT}
      id={id}
      outputHandles={["value"]}
      infoAvailable={true}
    >
      <InputBox
        label="Name"
        type="text"
        value={currName}
        onChange={handleNameChange}
      />
      
      <SelectBox
        label="Type"
        options={INPUT_OPTIONS}
        value={inputType}
        onChange={handleTypeChange}
      />
    </NodeContainer>
  );
};