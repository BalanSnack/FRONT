import React from "react";
import styles from "./SquareBtn.module.css";

interface SquareBtnProps {
  theme: "myPage" | "comments" | "commentReport" | "commentLike" | "gameReport" | "gameLike";
  isSelected?: boolean;
  children: React.ReactNode;
}

const getStyle = ({ theme, isSelected }: SquareBtnProps) => {
  switch (theme) {
    case "myPage":
      return `text-main rounded-[5px] px-4 py-1`;
    case "comments":
      return `text-main rounded-[21px] px-4 py-1`;
    case "commentReport":
      return `text-font2 rounded-[5px] p-2`;
    case "commentLike":
      return `rounded-[5px] p-2 ${isSelected ? `text-pink-900` : `text-font2`}`;
    case "gameReport":
      return `rounded-[5px] p-2`;
    case "gameLike":
      return `rounded-[5px] p-2 ${isSelected ? `text-pink-900` : `text-main`}`;
  }
};

export default function SquareBtn(props: SquareBtnProps) {
  return (
    <div
      className={`flex justify-center ${getStyle(props)} ${
        props.isSelected ? `${styles.selectedSquareBtn}` : `${styles.squareBtn}`
      }`}
    >
      <div className="p-2 items-center text-center font-suitMedium">{props.children}</div>
    </div>
  );
}
