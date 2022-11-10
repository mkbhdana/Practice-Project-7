import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [state, setState] = useState({
    enteredUser: "",
    enteredAge: "",
    error: "",
  });

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      state.enteredUser.trim().length === 0 ||
      state.enteredAge.trim().length === 0
    ) {
      setState((prevState) => {
        return {
          ...prevState,
          error: {
            title: "Invalid Age",
            message: "Please enter a valid age (above 18).",
          },
        };
      });
      return;
    }
    if (+state.enteredAge < 18) {
      setState((prevState) => {
        return {
          ...prevState,
          error: {
            title: "Invalid Input",
            message: "Please enter a valid age and name (empty input).",
          },
        };
      });
      return;
    }

    const userData = {
      name: state.enteredUser,
      age: +state.enteredAge,
    };

    props.onAddUsers(userData.name, userData.age);

    setState((prevState) => {
      return {
        ...prevState,
        enteredUser: "",
        enteredAge: "",
      };
    });
  };

  const userNameHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, enteredUser: event.target.value };
    });
  };
  const ageHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  };
  const errorHandler = () => {
    setState((prevState) => {
      return {
        ...prevState,
        error: null,
      };
    });
  };
  return (
    <div>
      {state.error && (
        <ErrorModal
          title={state.error.title}
          message={state.error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={state.enteredUser}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={state.enteredAge}
            onChange={ageHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
