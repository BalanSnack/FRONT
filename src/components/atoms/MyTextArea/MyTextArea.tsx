import React from "react";
import styles from "./MyTextArea.module.css";

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
};

export default function MyInput({ value, inputHandler }: inputProps) {
  return (
    <>
      <div className="w-full flex">
        <textarea
          id="inputValue"
          className={styles.inputBox}
          value={value}
          onChange={(e) => inputHandler(e.target.value)}
        />
      </div>
    </>
  );
}