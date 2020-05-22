import React, { useEffect, useState } from "react";
import { Placeholder, Grid } from "semantic-ui-react";
import axios from 'axios';

const SingleArticle = (props) => {
  const [article, setArticle] = useState({})

  useEffect(() => {
    const chooseArticle = async () => {
      let response = await axios.get(`/articles/${props.match.params.id}`);
      setArticle(response.data.article);
    };
    chooseArticle()
  }, [])

  return (
    <>
      <Grid.Row width={3} centered>
        <Placeholder
          style={{ height: 250, width: 400 }}
          key={article.id}
          id={"article-" + article.id + "-title"}
        >
          <Placeholder.Image />
          <h5 style={{ textAlign: "center" }}>{article.title}</h5>
        </Placeholder>
      </Grid.Row>
      <Grid.Row width={3} centered>
        <Placeholder key={article.id} id={"article-" + article.id + "-body"}>
          <p>{article.body}</p>
        </Placeholder>
      </Grid.Row>
    </>
  );
};

export default SingleArticle;
