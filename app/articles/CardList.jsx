import ArticleCard from "./ArticleCard";

const CardList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
};

export default CardList;
