import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState()

  const userHandler = (e) => {
    e.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 ) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid age and name (non-empty values)'
        })
        return ;
    }
    if(+enteredUserAge < 1 ) {
        setError({
            title: 'Invalid Age',
            message: 'Please enter a valid age (> 0 )'
        })
        return ;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('')
  };

  const setErrorHandler = (props) => {
    setError(null)
  }

  return (
      <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={setErrorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={userHandler}>
        <label htmlFor="userName">User</label>
        <input
          type="text"
          id="uesrName"
          value={enteredUserName}
          onChange={(e) => setEnteredUserName(e.target.value)}
        />
        <label htmlFor="userAge">Age (Years)</label>
        <input
          type="number"
          id="uesrAge"
          value={enteredUserAge}
          onChange={(e) => setEnteredUserAge(e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
