import React from "react";
import MyLogo from "@/components/atoms/MyLogo";
import GameCardBtn from "@/components/organisms/GameCardBtn/GameCardBtn";
import MyText from "@/components/atoms/MyText/MyText";

import { gameData } from "./gameDummyData/data";
import Panel from "@/types/panel";

export default function GamePage() {
  return (
    <div>
      <div className="top">
        <MyLogo size="sm" />
      </div>
      <div className="game-main flex justify-center my-5">
        <MyText size="md" color="font1" weight="semi">
          {gameData.title}
        </MyText>
        <div>
          {gameData.panels.map(
            (panel) => {
              return <GameCardBtn panel={panel} />;
            },
            // console.log(typeof panel),
          )}
        </div>
      </div>
    </div>
  );
}
