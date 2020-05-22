import React from "react";
import { Grid } from "semantic-ui-react";
import "../css/Header.css"

const Header = () => {
  return (
    <Grid columns={3} divided centered>
      <h1 id="header">Daily News Sense</h1>
    </Grid>
  );
};
export default Header;
