import React, { useState } from "react";
import MyLogo from "@/components/atoms/MyLogo";
import GameCardBtn from "@/components/organisms/GameCardBtn/GameCardBtn";
import MyText from "@/components/atoms/MyText/MyText";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";
import CommentTable from "@/components/molecules/Comment/CommentTable";

import { gameData } from "./gameDummyData/data";

export default function GamePage() {
  const [panelSelected, setPanelSelected] = useState(false);
  const [commentsSelected, setCommentsSelected] = useState(false);
  const [gameReport, setGameReport] = useState(false);
  const [gameLike, setGameLike] = useState(false);

  const panelBtnHandler = () => {
    setPanelSelected(!panelSelected);
  };
  const commentsBtnHandler = () => {
    setCommentsSelected(!commentsSelected);
  };
  const gameReportHandler = () => {
    setGameReport(!gameReport);
  };
  const gameLikeHandler = () => {
    setGameLike(!gameLike);
  };

  return (
    <div className="w-full h-full">
      <MyLogo size="sm" className="pb-5" />
      <div className="game-main h-[15rem]">
        <MyText
          size="lg"
          color="font1"
          weight="semi"
          className="flex justify-center items-center pb-3 h-1/6"
        >
          {gameData.title}
        </MyText>
        <div className="flex gap-5 h-5/6">
          {gameData.panels.map((panel) => {
            return (
              <GameCardBtn
                props={panel}
                isSelected={panel.isSelected}
                clickHandler={panelBtnHandler}
                key={panel.location}
              />
            );
          })}
        </div>
      </div>
      <div className="btn-group flex justify-between pt-5 pb-3">
        <SquareBtn
          theme="round"
          text={`${gameData.comments.length}`}
          icon="comment"
          isSelected={commentsSelected}
          clickHandler={commentsBtnHandler}
        />
        <div className="btn-right flex gap-3">
          <SquareBtn
            theme="gameReport"
            icon="report"
            isSelected={gameReport}
            clickHandler={gameReportHandler}
          />
          <SquareBtn
            theme="gameLike"
            icon="heart"
            isSelected={gameLike}
            clickHandler={gameLikeHandler}
          />
        </div>
      </div>
      {commentsSelected ? <CommentTable comments={gameData.comments} /> : <></>}
    </div>
  );
}
