import React, { useState, useEffect } from "react";
import styles from "./LongBtn.module.css";

interface LongBtnProps {
  theme: "basic" | "google" | "kakao";
  isSelected?: boolean;
  children: React.ReactNode;
}

const getStyle = ({ theme, isSelected }: LongBtnProps) => {
  const colors = {
    basic: `bg-back ${isSelected ? `${styles.selectedLongBtn}` : `${styles.longBtn}`}`,
    google: `bg-[#FFFFFF] ${styles.longBtn}`,
    kakao: `bg-[#F7E600] ${styles.longBtn}`,
  };
  return colors[theme];
};

export default function LongBtn(props: LongBtnProps) {
  return (
    <div className={getStyle(props)}>
      <div>{props.children}</div>
    </div>
  );
}
