const AricleText = ({ data }) => {
  const { h, p } = data;
  return (
    <div>
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
  );
};

export default AricleText;
