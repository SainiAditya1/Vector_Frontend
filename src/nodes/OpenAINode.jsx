import { useState, useEffect, useCallback } from "react";
import NodeContainer from "../components/NodeContainer";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import { NODE_TYPES, OPEN_AI_MODELS } from "../utils/constants";
import { useStore } from "../store";

export const OpenAINode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

 
  const [system, setSystem] = useState(data?.system || "");
  const [prompt, setPrompt] = useState(data?.prompt || "");
  const [model, setModel] = useState(data?.model || "gpt-4-turbo");

 
  const handleSystemChange = useCallback((e) => {
    setSystem(e.target.value);
  }, []);

  const handlePromptChange = useCallback((e) => {
    setPrompt(e.target.value);
  }, []);

  const handleModelChange = useCallback((value) => {
    setModel(value);
  }, []);

  
  useEffect(() => {
    updateNodeField(id, 'system', system);
  }, [id, system, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'prompt', prompt);
  }, [id, prompt, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'model', model);
  }, [id, model, updateNodeField]);

  return (
    <NodeContainer
      heading="OpenAI LLM"
      type={NODE_TYPES.OPEN_AI}
      id={id}
      inputHandles={["system", "prompt"]}
      outputHandles={["response"]}
      infoAvailable={true}
      infoContent="Generates text using OpenAI models based on system and user prompts."
    >
      <InputBox
        label="System Prompt"
        type="text"
        placeholder="You are a helpful assistant..."
        value={system}
        onChange={handleSystemChange}
      />
      
      <InputBox
        label="User Prompt"
        type="text"
        placeholder="{{input}}"
        value={prompt}
        onChange={handlePromptChange}
      />

      <SelectBox
        label="Model"
        options={OPEN_AI_MODELS}
        value={model}
        onChange={handleModelChange}
      />
    </NodeContainer>
  );
};