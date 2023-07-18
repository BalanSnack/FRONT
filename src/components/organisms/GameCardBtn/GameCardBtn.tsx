import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./GameCardBtn.module.css";

import Panel from "@/types/panel";

interface gameCardBtnProps {
  props: Panel;
  isSelected?: boolean;
  clickHandler?: () => void;
}

const getBgColor = (location: string, isSelected: boolean) => {
  switch (location) {
    case "left":
      return `bg-pink-500 ${isSelected ? styles.selectedPinkCardBtn : styles.pinkCardBtn}`;
    case "right":
      return `bg-sky-500 ${isSelected ? styles.selectedBlueCardBtn : styles.blueCardBtn}`;
  }
};

const getTextColor = (location: string) => {
  switch (location) {
    case "left":
      return "pink";
    case "right":
      return "blue";
  }
};

export default function GameCardBtn({ props, isSelected = false, clickHandler }: gameCardBtnProps) {
  return (
    <div
      className={`${styles.cardBtn} ${getBgColor(props.location, isSelected)}`}
      onClick={clickHandler}
    >
      <img src={props.image} alt={`${props.title} 이모티콘`} className="pb-2 w-[3rem]" />
      <MyText size="md" color={getTextColor(props.location)} weight="semi">
        {props.title}
      </MyText>
    </div>
  );
}
