import React from "react";
import styles from "./MainCardBtn.module.css";
import MyText from "@/components/atoms/MyText/MyText";
import { useNavigate } from "react-router-dom";

type Theme = "popular" | "new" | "random" | "category";

interface Props {
  theme: Theme;
}

const getStyle = (theme: Theme) => {
  const themeStyle = {
    popular: "bg-gradient-to-r from-pink-500 to-sky-500 flex-row-reverse aspect-[4/2]",
    new: "bg-pink-500 flex-col aspect-[5/3]",
    random: "bg-[#DBCCDD] flex-col aspect-[5/3]",
    category: "bg-sky-500 flex-col aspect-[5/3]",
  };

  return `${themeStyle[theme]} ${styles.cardBtn}`;
};

export default function MainCardBtn({ theme }: Props) {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    // 회의 후 router 수정 예정 (2022.5.29)
    navigate(`/game/1`);
  };

  const themeMsg = {
    popular: "인기",
    new: "신규",
    random: "랜덤",
    category: "카테고리",
  };

  return (
    <div
      onClick={clickHandler}
      className={`${getStyle(theme)} w-full justify-around cursor-pointer`}
      role="mainCardBtn"
    >
      <img src={`src/assets/images/${theme}_card.png`} />
      <MyText size={theme === "popular" ? "lg" : "md"} weight="medium">
        {themeMsg[theme]}
      </MyText>
    </div>
  );
}
