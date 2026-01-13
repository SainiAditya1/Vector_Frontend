

export const SubmitButton = ({ onClick, disabled }) => {
  return (
    <div style={styles.container}>
      <button 
        type="submit" 
        onClick={onClick}
        disabled={disabled}
        
      >
        Submit
      </button>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
};