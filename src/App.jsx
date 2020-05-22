import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <Switch>
            <Route exact path = "/" component = {ArticleList}></Route>
            <Route exact path = "/article" component = {SpecificArticle}></Route>
        </Switch> */}
      <ArticleList />
    </>
  );
}

export default App;
