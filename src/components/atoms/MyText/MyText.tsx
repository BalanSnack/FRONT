import React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Color = "main" | "pink" | "blue" | "font1" | "font2" | "back";
type Weight = "regular" | "medium" | "semi" | "bold";

interface myTextProps {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  weight?: Weight;
}

const sizes = {
  xs: "text-[0.5rem]",
  sm: "text-[0.8rem]",
  md: "text-[1.0rem]",
  lg: "text-[1.5rem]",
  xl: "text-[2.0rem]",
};

const fontColor = {
  main: "text-main",
  pink: "text-pink-900",
  blue: "text-sky-900",
  font1: "text-font1",
  font2: "text-font2",
  back: "text-back",
};

const fontWeight = {
  regular: "font-suitRegular",
  medium: "font-suitMedium",
  semi: "font-suitSemiBold",
  bold: "font-suitBold",
};

const getFontStyle = (size: Size, color: Color, weight: Weight) => {
  return `${fontColor[color]} ${sizes[size]} ${fontWeight[weight]}`;
};

export default function MyText({
  children,
  size = "md",
  color = "main",
  weight = "regular",
}: myTextProps) {
  return <span className={getFontStyle(size, color, weight)}>{children}</span>;
}
