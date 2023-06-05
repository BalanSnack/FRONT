import React, { useState, useEffect } from "react";
import styles from "./LongBtn.module.css";

interface LongBtnProps {
  theme: "basic" | "google" | "kakao";
  isSelected?: boolean;
  text: string;
}

const getStyle = ({ theme, isSelected }: LongBtnProps) => {
  const colors = {
    basic: `bg-back rounded-md ${isSelected ? `${styles.selectedLongBtn}` : `${styles.longBtn}`}`,
    google: `bg-[#FFFFFF] rounded-login ${styles.longBtn}`,
    kakao: `bg-[#FEE500] rounded-login text-[#191919] ${styles.longBtn}`,
  };
  return colors[theme];
};

const getIcon = (theme: "basic" | "google" | "kakao") => {
  const icon = {
    basic: null,
    google: <img src="src/assets/google_icon.svg" className="inline-block pr-6" />,
    kakao: <img src="src/assets/kakao_icon.svg" className="inline-block pr-6" />,
  };
  return icon[theme];
};

const getContext = ({ theme, text }: LongBtnProps) => {
  const context = {
    basic: <div>{text}</div>,
    google: (
      <div className="flex justify-center w-full">
        <span className="font-suitBold text-[#757575] w-full">구글로 시작하기</span>
      </div>
    ),
    kakao: (
      <div className="flex justify-center w-full">
        <span className="font-suitSemiBold">카카오로 시작하기</span>
      </div>
    ),
  };
  return context[theme];
};

export default function LongBtn(props: LongBtnProps) {
  return (
    <div className={`flex justify-start ${styles.banSelect} ${getStyle(props)}`}>
      {getIcon(props.theme)}
      {getContext(props)}
    </div>
  );
}

LongBtn.defaultProps = {
  theme: "basic",
};
