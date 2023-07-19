import React, { Dispatch, SetStateAction } from "react";
import styles from "./MyTextArea.module.css";
type dataType = { icon: string; content: string };

type propsType = {
  value: dataType;
  inputHandler: Dispatch<SetStateAction<dataType>>;
};

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
};

export default function MyTextArea({ value, inputHandler }: inputProps) {
  return (
    <>
      <div className="w-full flex h-full">
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
