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
  childComments: Reply[];
}

export interface CommentList {
  comments: Comment[];
  totalPageNumber: number;
}

export interface Reply {
  commentID: number;
  replyID: number;
  content: string;
  author: Avatar;
  isLiked: boolean;
  isReported: boolean;
  likeCount: number;
  createdAt: string;
  deletedAt: string;
}
