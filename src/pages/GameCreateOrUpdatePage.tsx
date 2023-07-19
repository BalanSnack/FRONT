import React, { useState } from "react";
import MyInput from "@/components/atoms/MyInput/MyInput";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";
import GameCreateCard from "@/components/organisms/GameCraeteCard/GameCreateCard";

export default function GameCreateOrUpdatePage() {
  const [title, setTitle] = useState("initCate");
  const [redCategory, setRedCategory] = useState("initCate");
  const [redContent, setRedContent] = useState("initData");

  const [blueCategory, setBlueCategory] = useState("");
  const [blueContent, setBlueContent] = useState("initData");

  const setInit = () => {
    setRedContent("initData");
    setBlueContent("initData");
    setTitle("");
    setRedCategory("initCate");
    setBlueCategory("initCate");
  };

  const createGame = () => {
    console.log(redCategory, redContent, blueCategory, blueContent, title);
  };

  return (
    <div className="flex flex-col h-full justify-center p-3">
      <div>
        <MyInput value={title} inputHandler={setTitle} isClearShow={true} />
      </div>

      <div className="grid grid-cols-2 gap-4 my-4">
        <GameCreateCard
          category={redCategory}
          setCategory={setRedCategory}
          content={redContent}
          setContent={setRedContent}
          theme="red"
        />
        <GameCreateCard
          category={blueCategory}
          setCategory={setBlueCategory}
          content={blueContent}
          setContent={setBlueContent}
          theme="blue"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={setInit}
          className="border px-4 py-2 rounded-lg shadow-round text-main font-bold"
        >
          초기화
        </button>
        <button
          onClick={createGame}
          className="border px-4 py-2 rounded-lg shadow-round text-main font-bold"
        >
          생성하기
        </button>
      </div>
    </div>
  );
}
