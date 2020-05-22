import React from "react";
import { Placeholder, Grid } from "semantic-ui-react";

const Article = ({ singleArticle }) => {
  return (
    <>
      <Grid.Row width={3} centered>
        <Placeholder
          style={{ height: 250, width: 400 }}
          key={singelArticle.id}
          id={"article-" + singelArticle.id + "-title"}
        >
          <Placeholder.Image />
          <h5 style={{ textAlign: "center" }}>{singleArticle.title}</h5>
        </Placeholder>
      </Grid.Row>
      <Grid.Row width={3} centered>
        <Placeholder key={singelArticle.id} id={"article-" + singelArticle.id + "-body"}>
          <p>{singleArticle.body}</p>
        </Placeholder>
      </Grid.Row>
    </>
  );
};

export default Article;
