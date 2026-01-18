import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer"; 
import SelectBox from "../components/SelectBox";         
import { FILE_INPUT_OPTIONS, NODE_TYPES } from "../utils/constants";
import { useStore } from "../store";

export const TextToFileNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  

  const [fileType, setFileType] = useState(data?.fileType || "PDF");

  const handleTypeChange = useCallback((value) => {
    setFileType(value);
  }, []);

  
  useEffect(() => {
    updateNodeField(id, 'fileType', fileType);
  }, [id, fileType, updateNodeField]);

  return (
    <NodeContainer
      heading="Text to File"
      type={NODE_TYPES.TEXT_TO_FILE}
      id={id}
      inputHandles={["Text"]}
      outputHandles={["File"]}
      infoAvailable={true}
      infoContent="Converts text input into a specific file format."
    >
      <div className="mb-2 text-xs text-muted-foreground">
        Convert text to a downloadable file.
      </div>

      <SelectBox
        label="File Type"
        options={FILE_INPUT_OPTIONS}
        value={fileType}
        onChange={handleTypeChange}
      />
    </NodeContainer>
  );
};