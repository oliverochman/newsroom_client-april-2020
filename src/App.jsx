import React, { useState, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";


const App = () => {
  const [uid, setUid] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Header
        uid={uid}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Navbar>
        <div>
          <Suspense fallback={<div>Loading</div>} />
         </div>
      </Navbar>
      <Switch>
        <Route exact path="/" component={ArticleList}></Route>
        <Route exact path="/article/:id" render={() => (
          <SingleArticle 
          authenticated={authenticated} 
          />
        )}></Route>
        <Route exact path="/category/:category" component={ArticleList}></Route>
        <Route
          exact
          path="/sign_in"
          render={() => (
            <LoginForm setUid={setUid} setAuthenticated={setAuthenticated} />
          )}
        ></Route>
      </Switch>
    </>
  );
};
export default App;
