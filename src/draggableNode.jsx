import React, { useCallback } from 'react';

export const DraggableNode = ({ type, label }) => {
  

  const onDragStart = useCallback((event) => {
    const appData = { nodeType: type };
    
   
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  }, [type]);

  const onDragEnd = useCallback((event) => {
    event.target.style.cursor = 'grab';
  }, []);

  return (
    <div
      className={type}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable
      style={styles.node} 
    >
      <span style={styles.text}>{label}</span>
    </div>
  );
};

const styles = {
  node: {
    cursor: 'grab',
    minWidth: '80px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: '#1C2536',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: '#fff',
  }
};