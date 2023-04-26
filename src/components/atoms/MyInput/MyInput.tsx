import React, { useEffect, useState } from "react";
import styles from "./MyInput.module.css";
import { XCircleIcon } from "@heroicons/react/24/solid";

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
  isClearShow?: boolean;
};

export default function MyInput({ value, inputHandler, isClearShow = false }: inputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const frameStyle = (isFocused: boolean) => {
    return `${styles.frame} ${isFocused && styles.onFocus}`;
  };

  return (
    <div className={frameStyle(isFocused)}>
      <input
        type="text"
        className={styles.myInput}
        value={value}
        onChange={(e) => inputHandler(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isClearShow && (
        <XCircleIcon
          color="#B8BBCB"
          className={styles.clearIcon}
          onClick={() => inputHandler("")}
        />
      )}
    </div>
  );
}
