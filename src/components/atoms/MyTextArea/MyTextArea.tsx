import React from "react";
import styles from "./MyTextArea.module.css";

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
};

export default function MyTextArea({ value, inputHandler }: inputProps) {
  return (
    <div className="w-full flex h-full">
      <textarea
        data-testid="textAreaField"
        id="inputValue"
        className={styles.inputBox}
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </div>
  );
}
