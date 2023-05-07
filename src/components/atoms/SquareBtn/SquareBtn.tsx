import React from "react";
import styles from "./SquareBtn.module.css";

import { HeartIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { UilCommentAltLines } from "@iconscout/react-unicons";

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
      return `text-main rounded-[5px] px-5 py-3`;
    case "comments":
      return `text-main rounded-[21px] px-5 py-3`;
    case "commentReport":
      return `text-font2 rounded-[5px] p-3`;
    case "commentLike":
      return `rounded-[5px] p-3 ${isSelected ? `text-pink-900` : `text-font2`}`;
    case "gameReport":
      return `rounded-[5px] p-3 text-main`;
    case "gameLike":
      return `rounded-[5px] p-3 ${isSelected ? `text-pink-900` : `text-font2`}`;
  }
};

const getIcon = ({ theme, icon }: SquareBtnProps) => {
  if (theme === "comments") {
    return <UilCommentAltLines className="w-7 h-7 pr-2" />;
  } else if (icon === "report") {
    return <ExclamationCircleIcon className="w-6 h-6" />;
  } else if (icon === "heart") {
    switch (theme) {
      case "gameLike":
        return <HeartIcon className="w-6 h-6" />;
      case "commentLike":
        return <HeartIcon className="w-7 h-7 pr-2" />;
    }
  }
};

export default function SquareBtn(props: SquareBtnProps) {
  return (
    <div
      className={`flex justify-center cursor-pointer ${styles.banSelect} ${getStyle(props)} ${
        props.isSelected ? `${styles.selectedSquareBtn}` : `${styles.squareBtn}`
      }`}
    >
      <div className="items-center flex justify-between text-center font-suitMedium w-full h-full">
        <div>{getIcon(props)}</div>
        <span>{props.text}</span>
      </div>
    </div>
  );
}
