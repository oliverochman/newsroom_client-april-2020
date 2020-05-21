import React, { Component } from "react";
import axios from "axios";
import { Placeholder, Grid } from "semantic-ui-react";

export default class ArticleList extends Component {
  state = {
    articleList: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get("/articles");
      this.setState({ articleList: response.data.articles });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let articleslist = this.state.articleList.map((article) => {
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
      <Grid columns={3} divided centered>
        {articleslist}
      </Grid>
    );
  }
}
