import React from "react";
import { Placeholder, Grid } from "semantic-ui-react";
import Axios from "axios";

const chooseArticle = async (id) => {
  let response = await Axios.get(`/articles/${id}`);
  let singleArticle = response.data.article;
  debugger;
  console.log(response);
};

const ArticleCard = ({ article }) => {
  return (
    <Grid.Row width={3} centered>
      <Placeholder
        onClick={() => chooseArticle(article.id)}
        style={{ height: 250, width: 400 }}
        key={article.id}
        id={"article-" + article.id}
      >
        <Placeholder.Image />
        <h5 style={{ textAlign: "center" }}>{article.title}</h5>
      </Placeholder>
    </Grid.Row>
  );
};

export default ArticleCard;
