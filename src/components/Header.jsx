import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Grid columns={3} divided centered>
      <Grid.Row>
        <h1 id="header">Daily News Sense</h1>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Header;
