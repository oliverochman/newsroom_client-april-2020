import React, { Component } from "react";
import axios from "axios";

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
          <div key={article.id} id={"article-" + article.id}>
            {article.title}
          </div>
        </>
      );
    });
    return <div>{articleslist}</div>;
  }
}
