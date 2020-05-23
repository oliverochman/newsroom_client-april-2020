import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path = "/" component={ArticleList}></Route>
        <Route exact path = "/article/:id" component={SingleArticle}></Route>
      </Switch>
    </>
  );
}
export default App;