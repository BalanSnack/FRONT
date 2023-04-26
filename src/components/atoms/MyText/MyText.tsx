import React from "react";
import styles from "./MyText.module.css";

interface myTextProps {
  value: string;
  size?: "sm" | "md" | "lg";
}

const frameStyle = {
  sm: `${styles.myTextBox} p-1 pl-2`,
  md: `${styles.myTextBox} p-2 pl-2`,
  lg: `${styles.myTextBox} p-3 pl-2`,
};

const sizes = {
  sm: "text-[0.5rem]",
  md: "text-[1.0rem]",
  lg: "text-[1.5rem]",
};

export default function MyText({ value, size = "md" }: myTextProps) {
  return (
    <div className={frameStyle[size]}>
      <span className={sizes[size]}>{value}</span>
    </div>
  );
}
