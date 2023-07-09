import React from "react";
import { Comment } from "@/types/comment";
import CommentItem from "./CommentItem";

interface CommentTableProps {
  comments: Comment[];
}

export default function CommentTable({ comments }: CommentTableProps) {
  return (
    <div>
      {comments.map((comment) => {
        return <CommentItem commentData={comment} key={comment.commentID} />;
      })}
    </div>
  );
}
