import React, { useState } from "react";
import styles from "./CommentItem.module.css";
import type { Comment } from "@/types/comment";
import MyText from "@/components/atoms/MyText/MyText";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon, HeartIcon } from "@heroicons/react/24/outline";

interface CommentItemProps {
  commentData: Comment;
}

export default function CommentItem({ commentData }: CommentItemProps) {
  const [commentIsLiked, setCommentIsLiked] = useState(commentData.isLiked);
  const [commentLikeCnt, setCommentLikeCnt] = useState(commentData.likeCount);

  const commentLikeHandler = () => {
    if (commentIsLiked) {
      setCommentIsLiked(!commentIsLiked);
      setCommentLikeCnt(commentLikeCnt - 1);
    } else {
      setCommentIsLiked(!commentIsLiked);
      setCommentLikeCnt(commentLikeCnt + 1);
    }
  };

  return (
    <div className={styles.itemBox}>
      <div className={styles.topArea}>
        <div className="flex items-end gap-2">
          <MyText weight="medium">{commentData.author.nickname}</MyText>
          <MyText color="font2" size="sm">
            {commentData.createdAt}
          </MyText>
        </div>
        <div className={styles.countArea}>
          <div className={styles.countItem} onClick={commentLikeHandler}>
            {commentIsLiked ? (
              <SolidHeartIcon className="w-5 text-pink-900" />
            ) : (
              <HeartIcon className="w-5 text-main" />
            )}
            <MyText size="sm">{commentLikeCnt}</MyText>
          </div>
          {/* <div className={styles.countItem}>
            <ExclamationCircleIcon className="w-5 text-main" />
            <MyText size="sm">신고</MyText>
          </div> */}
        </div>
      </div>
      <div>
        <MyText color="font1">{commentData.content}</MyText>
      </div>
    </div>
  );
}
