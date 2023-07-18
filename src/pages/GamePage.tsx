import React, { useState, useEffect } from "react";
import MyLogo from "@/components/atoms/MyLogo";
import GameCardBtn from "@/components/organisms/GameCardBtn/GameCardBtn";
import MyText from "@/components/atoms/MyText/MyText";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";
import CommentTable from "@/components/molecules/Comment/CommentTable";

import { gameData } from "./gameDummyData/data";

export default function GamePage() {
  // const [panelSelected, setPanelSelected] = useState(false);
  const [commentsSelected, setCommentsSelected] = useState(false);
  const [gameReport, setGameReport] = useState(false);
  const [gameLike, setGameLike] = useState(false);

  const commentsBtnHandler = () => {
    setCommentsSelected(!commentsSelected);
  };
  const gameReportHandler = () => {
    setGameReport(!gameReport);
  };
  const gameLikeHandler = () => {
    setGameLike(!gameLike);
  };

  // panel selected 관련 시도 => 추후 수정 예정
  const [leftPanelData, setLeftPanelData] = useState(gameData.panels[0]);
  const [leftPanelSelected, setLeftPanelSelected] = useState(gameData.panels[0].isSelected);
  const [rightPanelData, setRightPanelData] = useState(gameData.panels[1]);
  const [rightPanelSelected, setRightPanelSelected] = useState(gameData.panels[1].isSelected);

  const leftPanelHandler = () => {
    setLeftPanelSelected(!leftPanelSelected);
    setRightPanelSelected(false);
  };
  const rightPanelHandler = () => {
    setRightPanelSelected(!rightPanelSelected);
    setLeftPanelSelected(false);
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
          {/* {gameData.panels.map((panel) => {
            return (
              <GameCardBtn
                props={panel}
                isSelected={panel.isSelected}
                clickHandler={panelBtnHandler}
                key={panel.location}
              />
            );
          })} */}
          <GameCardBtn
            props={leftPanelData}
            isSelected={leftPanelSelected}
            clickHandler={leftPanelHandler}
          />
          <GameCardBtn
            props={rightPanelData}
            isSelected={rightPanelSelected}
            clickHandler={rightPanelHandler}
          />
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
