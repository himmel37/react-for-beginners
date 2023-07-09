import PropsType from "props-type";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.PropsType = {
  text: PropsType.string,
};
export default Button;
