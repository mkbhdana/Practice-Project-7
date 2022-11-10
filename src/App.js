import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersLists";

function App() {
  const [usersList, setUsersLists] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersLists((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUsers={addUserHandler} />
      <UsersLists users={usersList} />
    </div>
  );
}

export default App;
