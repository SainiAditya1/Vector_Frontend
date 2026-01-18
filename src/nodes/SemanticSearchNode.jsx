import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer"; 
import SelectBox from "../components/SelectBox";         
import { NODE_TYPES, SEMANTIC_SEARCH_OPTIONS } from "../utils/constants";
import { useStore } from "../store";

export const SemanticSearchNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  

  const [model, setModel] = useState(data?.model || "openai-text-embedding-3-small");

  const handleModelChange = useCallback((value) => {
    setModel(value);
  }, []);

 
  useEffect(() => {
    updateNodeField(id, 'model', model);
  }, [id, model, updateNodeField]);

  return (
    <NodeContainer
      heading="Semantic Search"
      type={NODE_TYPES.SEMANTIC_SEARCH}
      id={id}
      inputHandles={["query", "documents"]}
      outputHandles={["result"]}
      infoAvailable={true}
      infoContent="Performs vector-based semantic search on the provided documents using the selected embedding model."
    >
      <div className="mb-2 text-xs text-muted-foreground">
        Select the embedding model for search.
      </div>

      <SelectBox
        label="Model"
        options={SEMANTIC_SEARCH_OPTIONS}
        value={model}
        onChange={handleModelChange}
      />
    </NodeContainer>
  );
};