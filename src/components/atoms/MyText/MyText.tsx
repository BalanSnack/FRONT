import React from "react";

type sizeType = "sm" | "md" | "lg";
type colorType = "main" | "pink" | "blue" | "font1" | "font2";

interface myTextProps {
  children: React.ReactNode;
  size?: sizeType;
  color?: colorType;
}

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

export default function MyText({ children, size = "md", color = "font1" }: myTextProps) {
  return <span className={getFontStyle(size, color)}>{children}</span>;
}
