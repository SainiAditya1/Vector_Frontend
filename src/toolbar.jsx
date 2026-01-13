
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={styles.padding}>
      <div style={styles.toolbar}>
        {nodeConfig.map((node) => (
          <DraggableNode 
            key={node.type} 
            type={node.type} 
            label={node.label} 
          />
        ))}
      </div>
    </div>
  );
};


const nodeConfig = [
  { type: 'customInput', label: 'Input' },
  { type: 'llm', label: 'LLM' },
  { type: 'customOutput', label: 'Output' },
  { type: 'text', label: 'Text' },
];


const styles = {
  padding: {
    padding: '10px',
  },
  toolbar: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
};