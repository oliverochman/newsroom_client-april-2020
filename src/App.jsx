import React from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Navbar from "./components/Navbar";
import CreateSubscription from "./components/CreateSubscription";



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList}></Route>
        <Route exact path="/article/:id" component={SingleArticle}></Route>
        <Route exact path="/category/:category" component={ArticleList}></Route>
        <Route exact path="/subscription"component={CreateSubscription}></Route>
      </Switch>
    </>
  );
}
export default App;
