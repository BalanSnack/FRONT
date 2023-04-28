import React from "react";
import styles from "./MyText.module.css";

type sizeType = "sm" | "md" | "lg";
type colorType = "main" | "pink" | "blue" | "font1" | "font2";

interface myTextProps {
  value: string;
  size?: sizeType;
  color?: colorType;
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

const fontColor = {
  main: "text-main",
  pink: "text-pink-900",
  blue: "text-sky-900",
  font1: "text-font1",
  font2: "text-font2",
};

const getFontStyle = (size: sizeType, color: colorType) => {
  return `${fontColor[color]} ${sizes[size]}`;
};

export default function MyText({ value, size = "md", color = "font1" }: myTextProps) {
  return (
    <div className={frameStyle[size]}>
      <span className={getFontStyle(size, color)}>{value}</span>
    </div>
  );
}
