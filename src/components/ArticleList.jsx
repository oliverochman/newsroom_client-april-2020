import React, { Component } from "react";
import axios from "axios";
import { Placeholder } from 'semantic-ui-react';

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
        <>
          <Placeholder style={{ height: 150, width: 150 }}
          key={article.id} id={"article-" + article.id}>
    <Placeholder.Image/>
    <h5>{article.title}</h5>
  </Placeholder>
        </>
      );
    });
    return <div>{articleslist}</div>;
  }
}
