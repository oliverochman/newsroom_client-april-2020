import React from 'react'
import { Placeholder, Grid } from "semantic-ui-react";

const ArticleCard = ({ article }) => {
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
  )
}

export default ArticleCard
