import { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {

  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');


  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setInputType(e.target.value);
  }, []);


  return (
    <div style={styles.container}>
      <div>
        <span>Input</span>
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
            value={inputType} 
            onChange={handleTypeChange}
            className="nodrag"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
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