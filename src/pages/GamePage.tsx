import React from "react";
import MyLogo from "@/components/atoms/MyLogo";
import GameCardBtn from "@/components/organisms/GameCardBtn/GameCardBtn";
import MyText from "@/components/atoms/MyText/MyText";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";

import { gameData } from "./gameDummyData/data";
import game from "@/routes/game";

export default function GamePage() {
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
            return <GameCardBtn props={panel} key={panel.location} />;
          })}
        </div>
      </div>
      <div className="btn-group flex justify-between py-5">
        <SquareBtn theme="round" text={`${gameData.comments.length}`} icon="comment" />
        <div className="btn-right flex gap-3">
          <SquareBtn theme="gameReport" icon="report" />
          <SquareBtn theme="gameLike" icon="heart" isSelected={gameData.isLiked} />
        </div>
      </div>
    </div>
  );
}
