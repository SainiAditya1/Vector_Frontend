// constants.js



export const INPUT_OPTIONS = [
  { label: "Text", value: "Text" },
  { label: "File", value: "File" },
 
];

export const FILE_INPUT_OPTIONS = [
  { label: "PDF Document (.pdf)", value: "PDF" },
  { label: "Text File (.txt)", value: "TXT" },
  { label: "Word Document (.docx)", value: "DOCX" },
];


export const NODE_TYPES = Object.freeze({
  INPUT: "customInput",
  OUTPUT: "customOutput",
  LLM: "llm",
  TEXT: "text",
  URL_LOADER: "urlLoader",
  gitLoader: "gitLoader",
  textToFile: "textToFile",
});