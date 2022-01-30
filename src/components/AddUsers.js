import {
  InputLabel,
  FormGroup,
  FormControl,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUsers = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const classes = useStyles();
  const history = useHistory();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User data</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => addUserDetails()}
        color="primary"
      >
        Add user
      </Button>
    </FormGroup>
  );
};

export default AddUsers;
