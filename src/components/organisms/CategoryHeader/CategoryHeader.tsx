import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./CategoryHeader.module.css";
import MyIcon from "@/components/atoms/MyIcon/MyIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";

interface Props {
  category: {
    title: string;
    img: string;
  };
  keyword: string;
  keywordHanlder: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CategoryHeader({ category, keyword, keywordHanlder }: Props) {
  const [inputFocus, setInputFocus] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <header className={styles.categoryHeader}>
      <div className={styles.topWrap}>
        <div className="flex gap-1 items-center">
          <MyIcon name={category.img} size="sm" />
          <MyText weight="bold">{category.title}</MyText>
        </div>
        <div className={styles.gameBtn}>
          <MyText weight="semi">게임 시작</MyText>
        </div>
      </div>
      <div
        className={`${styles.searchBar} ${inputFocus ? "shadow-selectedInput" : "shadow-input"}`}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={keywordHanlder}
          ref={searchInput}
          defaultValue={keyword}
        />
        <MagnifyingGlassIcon className={styles.searchIcon} color="#B8BBCB" />
      </div>
    </header>
  );
}
