import { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setOutputType(e.target.value);
  }, []);

  return (
    <div style={styles.container}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      
      <div>
        <span>Output</span>
      </div>
      
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="nodrag" 
          />
        </label>
        <label>
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="nodrag" 
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
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