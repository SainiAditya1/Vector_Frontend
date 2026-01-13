import { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = useCallback((e) => {
    setCurrText(e.target.value);
  }, []);

  return (
    <div style={styles.container}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange}
            className="nodrag" 
          />
        </label>
      </div>
      <Handle 
        type="source"
        position={Position.Right}
        id={`${id}-output`}
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
  }
};