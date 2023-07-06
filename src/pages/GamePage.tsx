import React from "react";
import MyLogo from "@/components/atoms/MyLogo";
import GameCardBtn from "@/components/organisms/GameCardBtn/GameCardBtn";
import MyText from "@/components/atoms/MyText/MyText";

import { gameData } from "./gameDummyData/data";

export default function GamePage() {
  return (
    <div className="w-full h-full">
      <MyLogo size="sm" className="pb-5" />
      <div className="game-main h-1/4">
        <MyText
          size="lg"
          color="font1"
          weight="semi"
          className="flex justify-center items-center pb-3"
        >
          {gameData.title}
        </MyText>
        <div className="flex gap-5 h-full">
          {gameData.panels.map((panel) => {
            return <GameCardBtn props={panel} key={panel.location} />;
          })}
        </div>
      </div>
    </div>
  );
}
