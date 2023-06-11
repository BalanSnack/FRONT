import type { Comment } from "./comment";
import type Avatar from "./avatar";
import type Panel from "./panel";

export interface Game {
  gameID: number;
  title: string;
  comments: Comment[];
  likeCount: number;
  isLiked: boolean;
  isReported: boolean;
  panels: Panel[];
  isVoted: boolean;
  host: Avatar;
  createdAt: string;
}

export interface GameList {
  games: Game[];
  totalPageNumber: number;
}
