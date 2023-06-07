import React from "react";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";

interface Props {
  fullPage: number;
  page: number;
  pageHandler: (pageNum: number) => void;
}

export default function Pagination(props: Props) {
  const startNum = Math.floor((props.page - 1) / 5) * 5 + 1;

  const pageBtns = [];
  for (let i = 0; i < 5; i++) {
    if (startNum + i > props.fullPage) {
      break;
    } else {
      pageBtns.push(
        <SquareBtn
          theme="square"
          text={`${startNum + i}`}
          isSelected={startNum + i === props.page}
          clickHandler={() => props.pageHandler(startNum + i)}
          key={startNum + i}
        />,
      );
    }
  }

  const pageDownClickHandler = (pageNum: number) => {
    if (pageNum > 1) {
      props.pageHandler(pageNum - 1);
    } else return;
  };

  const pageUpClickHandler = (pageNum: number) => {
    if (pageNum < props.fullPage) {
      props.pageHandler(pageNum + 1);
    } else return;
  };

  return (
    <div className="flex gap-2">
      <SquareBtn
        theme="square"
        icon="leftArrow"
        clickHandler={() => pageDownClickHandler(props.page)}
      />
      {pageBtns}
      <SquareBtn
        theme="square"
        icon="rightArrow"
        clickHandler={() => {
          pageUpClickHandler(props.page);
        }}
      />
    </div>
  );
}
