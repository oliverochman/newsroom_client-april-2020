import React, { useState, useEffect } from "react";
import axios from "axios";
import { Placeholder, Grid } from "semantic-ui-react";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [message] = useState();

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

  let articleslist = articleList.map((article) => {
    return (
      <Grid.Row width={3} centered>
        <Placeholder
          style={{ height: 250, width: 400 }}
          key={article.id}
          id={"article-" + article.id}
        >
          <Placeholder.Image />
          <h5 style={{ textAlign: "center" }}>{article.title}</h5>
        </Placeholder>
      </Grid.Row>
    );
  });

  return (
    <div>
      <Grid columns={3} divided centered>
        {articleslist}
      </Grid>
    </div>
  );
};

export default ArticleList;
