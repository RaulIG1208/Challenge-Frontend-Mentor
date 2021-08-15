import QuantityParraf from "./QuantityParraf"

const SectionQuantity = () => {
  return (
    <section className="container-quantity">
      <QuantityParraf strong="$89,914" small="of $100,000 backed" />
      <QuantityParraf strong="5,007" small="of total backers" />
      <QuantityParraf strong="56" small="left" />
      <progress value="70" max="100"></progress>
    </section>
  );
};

export default SectionQuantity;