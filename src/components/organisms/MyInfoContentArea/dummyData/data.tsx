import type { GameList } from "@/types/game";
import type { CommentList } from "@/types/comment";

const hostData: GameList = {
  games: [
    {
      gameID: 1,
      title: "게임1",
      comments: [],
      likeCount: 1,
      isLiked: true,
      isReported: false,
      panels: [
        {
          image: "",
          title: "패널1",
          isSelected: true,
          selectedCount: 1,
        },
        {
          image: "",
          title: "패널2",
          isSelected: true,
          selectedCount: 1,
        },
      ],
      isVoted: true,
      host: {
        avatarID: 1,
        nickname: "호스트1",
      },
      createdAt: "2021-10-10 10:10:10",
    },
    {
      gameID: 1,
      title: "게임2",
      comments: [],
      likeCount: 1,
      isLiked: true,
      isReported: false,
      panels: [
        {
          image: "",
          title: "패널1",
          isSelected: true,
          selectedCount: 1,
        },
        {
          image: "",
          title: "패널2",
          isSelected: true,
          selectedCount: 1,
        },
      ],
      isVoted: true,
      host: {
        avatarID: 1,
        nickname: "호스트2",
      },
      createdAt: "2021-10-10 10:10:10",
    },
  ],
  totalPageNumber: 4,
};

const commentData: CommentList = {
  comments: [
    {
      commentID: 1,
      content: "댓글1",
      childComments: [],
      gameID: 1,
      isLiked: true,
      isReported: false,
      likeCount: 10,
      reportCount: 0,
      createdAt: "2021-10-10 10:10:10",
      deletedAt: "",
      author: {
        avatarID: 1,
        nickname: "작성자1",
      },
    },
    {
      commentID: 1,
      content: "댓글2",
      childComments: [],
      gameID: 1,
      isLiked: true,
      isReported: false,
      likeCount: 10,
      reportCount: 0,
      createdAt: "2021-10-10 10:10:10",
      deletedAt: "",
      author: {
        avatarID: 1,
        nickname: "작성자2",
      },
    },
    {
      commentID: 1,
      content: "댓글3",
      childComments: [],
      gameID: 1,
      isLiked: true,
      isReported: false,
      likeCount: 10,
      reportCount: 0,
      createdAt: "2021-10-10 10:10:10",
      deletedAt: "",
      author: {
        avatarID: 1,
        nickname: "작성자3",
      },
    },
  ],
  totalPageNumber: 7,
};

const likeData: GameList = {
  games: [],
  totalPageNumber: 0,
};
export { hostData, commentData, likeData };
