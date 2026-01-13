import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import InputBox from "../components/InputBox";
import { useStore } from "../store";

export const UrlLoaderNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currUrl, setCurrUrl] = useState(data?.url || ""); 


  const handleUrlChange = useCallback((e) => {
    setCurrUrl(e.target.value);
  }, []);

  
  useEffect(() => {
    updateNodeField(id, 'url', currUrl);
  }, [id, currUrl, updateNodeField]);

  return (
    <NodeContainer
      heading="URL Loader"
      type={NODE_TYPES.URL_LOADER} 
      id={id}
      inputHandles={["value"]}
      outputHandles={["output"]}
      infoAvailable={true}
      infoContent="Loads and processes data from a specified web URL."
    >
      <div className="mb-2 text-xs text-muted-foreground">
        Reads data from a URL.
      </div>

      <InputBox
        label="URL"
        type="text" 
        placeholder="https://example.com"
        value={currUrl}
        onChange={handleUrlChange}
      />
    </NodeContainer>
  );
};