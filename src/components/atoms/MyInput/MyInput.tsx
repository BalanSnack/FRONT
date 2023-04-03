import React from "react";
import styles from "./MyInput.module.css";

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
  isClearShow?: boolean;
};

export default function MyInput({ value, inputHandler, isClearShow = false }: inputProps) {
  return (
    <>
      <div className="w-full flex">
        <input
          id="inputValue"
          className={styles.inputBox}
          value={value}
          onChange={(e) => inputHandler(e.target.value)}
        />
        {isClearShow ? <button onClick={() => inputHandler("")}>초기화</button> : null}
      </div>
    </>
  );
}
