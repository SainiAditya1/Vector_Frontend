
export const INPUT_OPTIONS = [
  { label: "Text", value: "Text" },
  { label: "File", value: "File" },
 
];

export const FILE_INPUT_OPTIONS = [
  { label: "PDF Document (.pdf)", value: "PDF" },
  { label: "Text File (.txt)", value: "TXT" },
  { label: "Word Document (.docx)", value: "DOCX" },
];

export const SEMANTIC_SEARCH_OPTIONS = [
  { label: "OpenAI Embedding 3 Small", value: "openai-text-embedding-3-small" },
  { label: "OpenAI Embedding 3 Large", value: "openai-text-embedding-3-large" },
  { label: "Cohere English v3.0", value: "cohere-embed-english-v3.0" },
];

export const OPEN_AI_MODELS = [
  { label: "GPT-4 Turbo", value: "gpt-4-turbo" },
  { label: "GPT-4o", value: "gpt-4o" },
  { label: "GPT-3.5 Turbo", value: "gpt-3.5-turbo" },
];


export const NODE_TYPES = Object.freeze({
  INPUT: "customInput",
  OUTPUT: "customOutput",
  LLM: "llm",
  TEXT: "text",
  URL_LOADER: "urlLoader",
  gitLoader: "gitLoader",
  textToFile: "textToFile",
  semanticSerach: "semanticSearch", 
  openai:"openai"
});