const ResultDisplay = ({ title, name, result }) => {
  return (
    <div className="result">
      <div className="result-detail">
        <h4>{title}</h4>
        <small>/ person</small>
      </div>
      <input type="text" name={name} readOnly value={result || "$0.00"} />
    </div>
  );
};

export default ResultDisplay;
