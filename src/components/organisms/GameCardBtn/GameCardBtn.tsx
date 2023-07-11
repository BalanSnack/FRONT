import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./GameCardBtn.module.css";

import Panel from "@/types/panel";

interface gameCardBtnProps {
  props: Panel;
  clickHandler?: () => void;
}

const getBgColor = (location: string) => {
  switch (location) {
    case "left":
      return `bg-pink-500 ${styles.pinkCardBtn}`;
    case "right":
      return `bg-sky-500 ${styles.blueCardBtn}`;
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

export default function GameCardBtn({ props }: gameCardBtnProps) {
  return (
    <div className={`${styles.cardBtn} ${getBgColor(props.location)}`}>
      <img src={props.image} alt={`${props.title} 이모티콘`} className="pb-2 w-[3rem]" />
      <MyText size="md" color={getTextColor(props.location)} weight="semi">
        {props.title}
      </MyText>
    </div>
  );
}
