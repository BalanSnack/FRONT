import React, { useState, useEffect } from "react";
import styles from "./LongBtn.module.css";

import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";

interface LongBtnProps {
  theme: "basic" | "google" | "kakao";
  isSelected?: boolean;
  children: React.ReactNode;
  text: string;
  icon?: string;
}

const getStyle = ({ theme, isSelected }: LongBtnProps) => {
  const colors = {
    basic: `bg-back ${isSelected ? `${styles.selectedLongBtn}` : `${styles.longBtn}`}`,
    google: `bg-[#FFFFFF] ${styles.longBtn}`,
    kakao: `bg-[#FEE500] text-[#191919] font-suitBold ${styles.longBtn}`,
  };
  return colors[theme];
};

export default function LongBtn(props: LongBtnProps) {
  return (
    <div className={`flex justify-center gap-3 ${getStyle(props)}`}>
      {props.icon === "kakao" && <ChatBubbleOvalLeftIcon className="w-6 h-6 opacity-90" />}
      <div>{props.text}</div>
    </div>
  );
}
