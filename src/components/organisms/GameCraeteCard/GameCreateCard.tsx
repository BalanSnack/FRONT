import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./GameCreateCard.module.css";
import MyTextArea from "@/components/atoms/MyTextArea/MyTextArea";
import MyModal from "@/components/atoms/MyModal/MyModal";

type ColorType = "red" | "blue";

type propsType = {
  theme: ColorType;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
      color="black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
};

export default function GameCreateCard(props: propsType) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, content, setContent, category, setCategory } = props;

  const colors = {
    red: "bg-[#eecfda]",
    blue: "bg-[#AEC4E3]",
  };

  const getStyle = (theme: ColorType) => {
    const STYLE = `${style.card} ${colors[theme]}`;
    return STYLE;
  };

  const setCate = () => {
    setCategory("카테고리 변경쓰");
    setIsOpen(false);
  };

  const categories = ["1", "2", "3", "4", "5", "6"];

  return (
    <>
      <MyModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      >
        <div className={style.modal}>
          {categories.map((category: any) => {
            return (
              <p className={style.categoryItem} onClick={setCate}>
                {category}
              </p>
            );
          })}
        </div>
      </MyModal>
      <div className={getStyle(theme)}>
        <span
          className={style.addBtn}
          onClick={() => {
            setCate();
            setIsOpen(true);
          }}
        >
          <PlusIcon />
        </span>
        <MyTextArea value={content} inputHandler={setContent} />
      </div>
    </>
  );
}
