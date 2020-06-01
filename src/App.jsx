import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Navbar from "./components/Navbar";
import CreateSubscription from "./components/CreateSubscription";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { connect } from "react-redux";

const App = (props) => {
  const [uid, setUid] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {

        location.coords.latitude
        location.coords.longitude

      props.dispatch({
        type: "GET_LOCATION",
        payload: {
          userCity: 
          userCountry:
        },
      });
    });
  }, []);

  return (
    <>
      <Header
        uid={uid}
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList}></Route>
        <Route
          exact
          path="/article/:id"
          render={() => <SingleArticle authenticated={authenticated} />}
        ></Route>
        <Route exact path="/category/:category" component={ArticleList}></Route>
        <Route
          exact
          path="/subscription"
          render={() => <CreateSubscription authenticated={authenticated} />}
        ></Route>
        <Route
          exact
          path="/sign_in"
          render={() => (
            <LoginForm
              uid={uid}
              setUid={setUid}
              setAuthenticated={setAuthenticated}
            />
          )}
        ></Route>
        <Route
          exact
          path="/sign_up"
          render={() => <SignUpForm setUid={setUid} />}
        ></Route>
      </Switch>
    </>
  );
};
export default connect()(App);
