import "../../styles/AuroraText.css";

const AuroraText = ({ children, className = "" }) => {
  return (
    <span className={`fw-bold mb-4 aurora-text ${className}`}>
      {children}
    </span>
  );
};

export default AuroraText;
