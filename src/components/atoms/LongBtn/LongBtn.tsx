import React, { useState, useEffect } from "react";
import styles from "./LongBtn.module.css";

interface LongBtnProps {
  theme?: string;
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function LongBtn({ theme, isSelected = false, children }: LongBtnProps) {
  return (
    <>
      {theme === "basic" && (
        <div
          className={`bg-back ${isSelected ? `${styles.selectedLongBtn}` : `${styles.longBtn}`}`}
        >
          <div className="">{children}</div>
        </div>
      )}
      {theme === "google" && (
        <div className={`bg-[#FFFFFF] ${styles.longBtn}`}>
          <div>{children}</div>
        </div>
      )}
      {theme === "kakao" && (
        <div className={`bg-[#F7E600] ${styles.longBtn}`}>
          <div>{children}</div>
        </div>
      )}
    </>
  );
}
