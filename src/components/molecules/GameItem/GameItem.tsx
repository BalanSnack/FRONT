import React from "react";
import styles from "./GameItem.module.css";
import type { Game } from "@/types/game";
import MyText from "@/components/atoms/MyText/MyText";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface Props {
  gameData: Game;
}

export default function GameItem({ gameData }: Props) {
  const navigate = useNavigate();

  const clickItemHandler = () => {
    navigate(`/game/${gameData.gameID}`);
  };

  return (
    <div className={styles.itemBox} onClick={clickItemHandler}>
      <div className={styles.topArea}>
        <div className="flex items-end gap-2">
          <MyText weight="medium">{gameData.host.nickname}</MyText>
          <MyText color="font2" size="sm">
            {gameData.createdAt}
          </MyText>
        </div>
        <div className={styles.countArea}>
          <div className={styles.countItem}>
            <HeartIcon className="w-5 text-pink-900" />
            <MyText size="sm">{gameData.likeCount}</MyText>
          </div>
          <div className={styles.countItem}>
            <ChatBubbleLeftRightIcon className="w-5 text-main" />
            <MyText size="sm">{gameData.comments.length}</MyText>
          </div>
        </div>
      </div>
      <div>
        <MyText weight="semi" color="font1">
          {gameData.title}
        </MyText>
      </div>
    </div>
  );
}
