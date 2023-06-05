import React from "react";
import styles from "./SquareBtn.module.css";

import { HeartIcon } from "@heroicons/react/24/solid";
import {
  ExclamationCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { UilCommentAltLines } from "@iconscout/react-unicons";

interface SquareBtnProps {
  theme: "basic" | "round" | "square" | "commentReport" | "commentLike" | "gameReport" | "gameLike";
  text?: string;
  icon?: "report" | "heart" | "leftArrow" | "rightArrow";
  isSelected?: boolean;
  clickHandler?: () => void;
}

const getStyle = ({ theme, isSelected = false }: SquareBtnProps) => {
  switch (theme) {
    case "basic":
      return `text-main rounded-[5px] px-5 py-3`;
    case "round":
      return `text-main rounded-[21px] px-5 py-3`;
    case "square":
      return `text-main rounded-[5px] p-3 aspect-square`;
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
  if (theme === "square") {
    return <UilCommentAltLines className="w-7 h-7 pr-2" />;
  } else if (icon === "report") {
    return <ExclamationCircleIcon className="w-6 h-6" />;
  } else if (icon === "heart") {
    switch (theme) {
      case "gameLike":
        return <HeartIcon className="w-6 h-6" />;
      case "commentLike":
        return <HeartIcon className="w-7 h-7" />;
    }
  } else if (icon === "leftArrow") {
    return <ChevronLeftIcon className="w-4 h-4" />;
  } else if (icon === "rightArrow") {
    return <ChevronRightIcon className="w-4 h-4" />;
  }
};

export default function SquareBtn(props: SquareBtnProps) {
  return (
    <div
      className={`flex w-fit justify-center cursor-pointer ${styles.banSelect} ${getStyle(props)} ${
        props.isSelected ? `${styles.selectedSquareBtn}` : `${styles.squareBtn}`
      }`}
      onClick={props.clickHandler}
    >
      <div className="items-center flex justify-between text-center font-suitMedium w-full h-full">
        <div>{getIcon(props)}</div>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

SquareBtn.defaultProps = {
  theme: "basic",
};
