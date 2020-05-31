import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import auth from "../modules/auth.js";
import "../css/Header.css";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const history = useHistory();
  const logout = async () => {
    try {
      await auth.signOut();
      props.setAuthenticated(false);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const { t } = useTranslation();
  const date = new Date();
  const currentTime = date.getHours();

  let time;

  if (currentTime < 12) {
    time = t("Morning");
  } else if (currentTime < 18) {
    time = t("Afternoon");
  } else {
    time = t("Evening");
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Button.Group>
            <Button>EN</Button>
            <Button.Or />
            <Button>SV</Button>
          </Button.Group>
          <h1 id="header" style={{ textAlign: "center" }}>
            <span>D</span>aily <span>N</span>ews <span>S</span>ense
          </h1>
          <div id="login">
            {!props.authenticated ? (
              <Link name="Login" to={{ pathname: "/sign_in" }}>
                <Button floated="right" basic inverted id="login">
                  {t("Login")}
                </Button>
              </Link>
            ) : (
              <>
                <p style={{ textAlign: "right" }}>
                  {t("Good")} {time} <br></br>
                  {props.uid}
                </p>
                <Link name="Logout" to={{ pathname: "/sign_in" }}>
                  <Button
                    floated="right"
                    basic
                    inverted
                    id="logout"
                    onClick={() => logout()}
                  >
                    {t("Logout")}
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default Header;
