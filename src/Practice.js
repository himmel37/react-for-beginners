import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Button from "./Button";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>hello</h1>;
}

function Practice() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev + 1);
  const onShow = () => setShowing((cur) => !cur);
  console.log("render");

  useEffect(() => {
    console.log("I am search for", keyword);
  }, [keyword]);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="search here..."
      />
      <button onClick={onClick}>click me!</button>
      <Button text="hi"></Button>
      {showing ? <Hello /> : null}
      <button onClick={onShow}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default Practice;
