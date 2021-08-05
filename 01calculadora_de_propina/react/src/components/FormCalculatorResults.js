import ResultDisplay from "./ResultDisplay";

const FormCalculatorResults = ({ results, reset }) => {
  return (
    <div className="section section-result">
      <ResultDisplay
        title="Tip Amount"
        name="tip-people"
        result={results.resultTip}
      />
      <ResultDisplay
        title="Total"
        name="total-people"
        result={results.resultAll}
      />
      <input type="reset" value="RESET" className="reset" disabled={!reset} />
    </div>
  );
};

export default FormCalculatorResults;
