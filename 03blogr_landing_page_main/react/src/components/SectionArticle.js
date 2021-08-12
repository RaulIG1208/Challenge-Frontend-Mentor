import ArticleText from "./ArticleText";

const SectionArticle = ({ articleData }) => {
  return (
    <article>
      {articleData.length > 0 ? (
        articleData.map((data, index) => (
          <ArticleText key={index} data={data} />
        ))
      ) : (
        <>
          <h4>{articleData.h}</h4>
          <p>{articleData.p}</p>
        </>
      )}
    </article>
  );
};

export default SectionArticle;
