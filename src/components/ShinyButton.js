import './ShinyButton.css';

const ShinyButton = ({ text = "Click Me", onClick, speed = 5, disabled = false }) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      className={`shiny-button ${disabled ? 'disabled' : ''}`}
      style={{ animationDuration }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ShinyButton;
