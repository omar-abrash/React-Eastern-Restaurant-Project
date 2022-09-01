import { useState } from "react";

import Form from "../UI/Form";
import Input from "../UI/Input";
import Button from "../UI/Button";

import searchIcon from "./Photos/search.jpg";

import styles from "./Header.module.css";

const SearchForm = () => {
  //
  const [searchWord, setSearchWord] = useState("");
  //
  const searchChangeHandler = (event) => {
    setSearchWord(event.target.value);
  };
  //
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(searchWord);
  };

  return (
    <Form onSubmit={submitHandler} className={styles.form}>
      <Input
        id="searchInput"
        type="search"
        onChange={searchChangeHandler}
        value={searchWord}
      />
      <Button type="submit">
        <img src={searchIcon} alt="searchIcon" />
      </Button>
    </Form>
  );
};
export default SearchForm;
