import type Avatar from "./avatar";

export interface Comment {
  commentID: number;
  gameID: number;
  content: string;
  author: Avatar;
  isLiked: boolean;
  isReported: boolean;
  likeCount: number;
  reportCount: number;
  createdAt: string;
  deletedAt: string;
  childComments: Comment[];
}

export interface CommentList {
  comments: Comment[];
  totalPageNumber: number;
}
