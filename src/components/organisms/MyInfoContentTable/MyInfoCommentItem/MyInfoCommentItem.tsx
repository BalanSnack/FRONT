import React from "react";
import styles from "./MyInfoCommentItem.module.css";
import type { Comment } from "@/types/comment";
import MyText from "@/components/atoms/MyText/MyText";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface Props {
  commentData: Comment;
}

export default function CommentItem({ commentData }: Props) {
  const navigate = useNavigate();

  const clickItemHandler = () => {
    navigate(`/game/${commentData.gameID}`);
  };

  return (
    <div className={styles.itemBox} onClick={clickItemHandler}>
      <div className={styles.topArea}>
        <div className="flex items-end gap-2">
          <MyText weight="medium">{commentData.author.nickname}</MyText>
          <MyText color="font2" size="sm">
            {commentData.createdAt}
          </MyText>
        </div>
        <div className={styles.countArea}>
          <div className={styles.countItem}>
            {commentData.isLiked ? (
              <SolidHeartIcon className="w-5 text-pink-900" />
            ) : (
              <HeartIcon className="w-5 text-main" />
            )}
            <MyText size="sm">{commentData.likeCount}</MyText>
          </div>
          <div className={styles.countItem}>
            <ChatBubbleLeftRightIcon className="w-5 text-main" />
            <MyText size="sm">{commentData.childComments.length}</MyText>
          </div>
        </div>
      </div>
      <div>
        <MyText color="font1">{commentData.content}</MyText>
      </div>
    </div>
  );
}
