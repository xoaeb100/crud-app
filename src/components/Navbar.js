import {
  AppBar,
  Button,
  //   IconButton,
  Toolbar,
  //   Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: { background: "#1A237E" },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontsize: 20,
  },
  login: {
    left: 1000,
    // position: relative,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          CRUD app
        </NavLink>

        <NavLink className={classes.tabs} to="/all" exact>
          All Users
        </NavLink>

        <NavLink className={classes.tabs} to="/add" exact>
          Add Users
        </NavLink>

        <Button variant="contained" className={classes.login} color="success">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
