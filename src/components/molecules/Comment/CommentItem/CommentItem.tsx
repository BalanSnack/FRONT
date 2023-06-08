import React from "react";
import styles from "./CommentItem.module.css";
import type { Comment } from "@/types/comment";
import MyText from "@/components/atoms/MyText/MyText";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

interface Props {
  commentData: Comment;
  isSelected?: boolean;
  clickHandler?: () => void;
}

export default function CommentItem({ commentData, isSelected = false, clickHandler }: Props) {
  return (
    <div
      className={`${styles.itemBox} ${isSelected && styles.selectedItemBox}`}
      onClick={clickHandler}
    >
      <div className={styles.topArea}>
        <div className="flex items-end gap-2">
          <MyText weight="medium">{commentData.author.nickname}</MyText>
          <MyText color="font2" size="sm">
            {commentData.createdAt}
          </MyText>
        </div>
        <div className={styles.countArea}>
          <div className={styles.countItem}>
            <HeartIcon className="w-5 text-pink-900" />
            <MyText size="sm">{commentData.likeCount}</MyText>
          </div>
          <div className={styles.countItem}>
            <ChatBubbleLeftRightIcon className="w-5 text-main" />
            <MyText size="sm">{commentData.childComments.length}</MyText>
          </div>
        </div>
      </div>
      <div>
        <MyText weight="semi" color="font1">
          {commentData.content}
        </MyText>
      </div>
    </div>
  );
}
