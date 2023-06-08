import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import MyInfoContentList from "./MyInfoContentList";
import styles from "./MyInfoContentTable.module.css";
import { useState } from "react";

type Contents = "host" | "comment" | "like";
type ContentsType = {
  [key in Contents]: string;
};

export default function MyInfoContentTable() {
  const [selectedContent, setSelectedContent] = useState<Contents>("host");

  const contents: ContentsType = {
    host: "생성한 게임",
    comment: "작성한 댓글",
    like: "좋아요 한 게임",
  };

  const typeHandler = (content: Contents) => {
    setSelectedContent(content);
  };

  const contentBtns = Object.entries(contents).map(([content, text]) => (
    <div
      onClick={() => typeHandler(content as Contents)}
      className={`${styles.contentBtn} ${content === selectedContent && styles.selectedContentBtn}`}
      key={content}
    >
      <MyText weight="medium">{text}</MyText>
    </div>
  ));

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex justify-between gap-3">{contentBtns}</div>
      <div className="flex-1 flex">
        <MyInfoContentList selectedContent={selectedContent} />
      </div>
    </div>
  );
}
