import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./UsersLists.module.css";

const UsersLists = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old).
            <Button>Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersLists;
