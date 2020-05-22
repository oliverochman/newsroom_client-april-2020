import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import ArticleCard from "../components/ArticleCard"

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  

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

  let articleCards = articleList.map((article) => {
    return (
      <ArticleCard
        article={article}
      />
    );
   
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
