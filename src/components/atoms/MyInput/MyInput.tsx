import React, { useEffect, useState } from "react";
import styles from "./MyInput.module.css";
import { XCircleIcon } from "@heroicons/react/24/solid";

type inputProps = {
  value: string | number;
  inputHandler: React.Dispatch<React.SetStateAction<string>>;
  isClearShow?: boolean;
  rounded?: boolean;
};

export default function MyInput({
  value,
  inputHandler,
  isClearShow = false,
  rounded = false,
}: inputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const frameStyle = (isFocused: boolean, rounded: boolean) => {
    return `${styles.frame} ${isFocused && styles.onFocus} ${
      rounded ? "rounded-[35px]" : "rounded-[10px]"
    }`;
  };

  return (
    <div className={frameStyle(isFocused, rounded)}>
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
