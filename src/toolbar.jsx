

import React from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='urlLoader' label='URL Loader' />
        <DraggableNode type='gitLoader' label='Git' />
        <DraggableNode type="textToFile" label="Text to File" />
        <DraggableNode type="semanticSearch" label="Semantic Search" />
        <DraggableNode type="openainode" label="Open AI" />
      </div>
    </div>
  );
};