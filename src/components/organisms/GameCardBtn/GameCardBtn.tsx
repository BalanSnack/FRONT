import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./GameCardBtn.module.css";

import Panel from "@/types/panel";

interface gameCardBtnProps {
  panel: Panel;
}

export default function GameCardBtn(panel: gameCardBtnProps) {
  return <div>console.log(panel)</div>;
}
