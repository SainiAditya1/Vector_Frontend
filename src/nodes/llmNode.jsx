import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div style={styles.container}>
    
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={styles.handleSystem}
      />

   
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={styles.handlePrompt}
      />

     
      <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>

    
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
};


const styles = {
  container: {
    width: 200,
    height: 80,
    border: '1px solid black',
    backgroundColor: '#fff', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  handleSystem: {
    top: `${100 / 3}%`,
  },
  handlePrompt: {
    top: `${200 / 3}%`, 
  },
};