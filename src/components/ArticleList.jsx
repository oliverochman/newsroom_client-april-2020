import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import ArticleCard from "../components/ArticleCard";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const path = window.location.pathname;
  const category = path.substring(path.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchArticleList = async () => {
      try {
        const response = await axios.get("/articles");
        setArticleList(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticleList();
  }, []);

  let filteredArticles = () => {
    switch (category) {
      case "":
        return articleList;
      case "current":
        return articleList.filter((article) => {
          return Date.now() - Date.parse(article.published_at) < 86400000;
        });
      default:
        return articleList.filter((article) => article.category === category);
    }
  };

  let articleCards = filteredArticles().map((article) => {
    return <ArticleCard article={article} />;
  });

  return (
    <div>
      <Grid columns={3} divided centered>
        {articleCards}
      </Grid>
    </div>
  );
};

export default ArticleList;
