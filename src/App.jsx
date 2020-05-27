import React from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Navbar from "./components/Navbar";
import CreateSubscription from "./components/CreateSubscription";
import { Elements } from 'react-stripe-elements'



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList}></Route>
        <Route exact path="/article/:id" component={SingleArticle}></Route>
        <Route exact path="/category/:category" component={ArticleList}></Route>
        <Route exact path="/subscription" render={() => (
            <Elements>
              <CreateSubscription />
            </Elements>
          )}
        ></Route>
      </Switch>
    </>
  );
}
export default App;
