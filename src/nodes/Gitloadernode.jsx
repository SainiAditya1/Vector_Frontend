import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import { NODE_TYPES } from "../utils/constants";
import InputBox from "../components/InputBox";
import { useStore } from "../store";

export const GitLoaderNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currRepo, setCurrRepo] = useState(data?.url || "");

  const handleRepoChange = useCallback((e) => {
    setCurrRepo(e.target.value);
  }, []);

  
  useEffect(() => {
    updateNodeField(id, 'url', currRepo);
  }, [id, currRepo, updateNodeField]);

  return (
    <NodeContainer
      heading="Git Loader"
      type={NODE_TYPES.GIT_LOADER}
      id={id}
      inputHandles={["value"]}
      outputHandles={["output"]}
      infoAvailable={true}
      infoContent="Clones and processes files from a specific Git repository."
    >
      <div className="mb-2 text-xs text-muted-foreground">
        Pulls code from a Git repository.
      </div>

      <InputBox
        label="Repository URL"
        type="text" 
        placeholder="https://github.com/username/repo"
        value={currRepo}
        onChange={handleRepoChange}
      />
    </NodeContainer>
  );
};