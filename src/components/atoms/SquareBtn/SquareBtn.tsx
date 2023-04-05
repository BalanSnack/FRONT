import React from "react";
import styles from "./SquareBtn.module.css";

interface SquareBtnProps {
  // width?: number;
  // height?: number;
  theme: string;
  fontSize?: string;
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function SquareBtn({
  // width,
  // height,
  theme,
  fontSize = "s",
  isSelected = false,
  children,
}: SquareBtnProps) {
  return (
    <>
      <div className={`flex justify-center ${styles.squareBtnShadow}`}>
        <div className="p-2 items-center text-center">{children}</div>
      </div>
    </>
  );
}
