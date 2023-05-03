import React from "react";
import styles from "./SquareBtn.module.css";

import { HeartIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface SquareBtnProps {
  theme: "myPage" | "comments" | "commentReport" | "commentLike" | "gameReport" | "gameLike";
  text?: string;
  icon?: string;
  isSelected?: boolean;
  children: React.ReactNode;
}

const getStyle = ({ theme, isSelected = false }: SquareBtnProps) => {
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
      return `rounded-[5px] p-2 text-main`;
    case "gameLike":
      return `rounded-[5px] p-2 ${isSelected ? `text-pink-900` : `text-font2`}`;
  }
};

export default function SquareBtn(props: SquareBtnProps) {
  return (
    <div
      className={`flex justify-center cursor-pointer ${styles.banSelect} ${getStyle(props)} ${
        props.isSelected ? `${styles.selectedSquareBtn}` : `${styles.squareBtn}`
      }`}
    >
      <div className="p-2 items-center flex text-center font-suitMedium">
        {props.icon === "report" && <ExclamationCircleIcon className="w-6 h-6" />}
        {props.icon === "heart" && <HeartIcon className="w-6 h-6" />}
        {props.text}
      </div>
    </div>
  );
}
