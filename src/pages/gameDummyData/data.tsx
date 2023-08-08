import type { Game } from "@/types/game";

const gameData: Game = {
  gameID: 1,
  title: "둘 중 하나만 고른다면?",
  comments: [
    {
      commentID: 1,
      content: "댓글1",
      childComments: [
        {
          commentID: 1,
          replyID: 1,
          content: "댓글4",
          isLiked: false,
          isReported: false,
          likeCount: 12,
          createdAt: "2023-07-10 12:10:10",
          deletedAt: "",
          author: {
            avatarID: 4,
            nickname: "작성자4",
          },
        },
        {
          commentID: 5,
          replyID: 2,
          content: "댓글5",
          isLiked: true,
          isReported: false,
          likeCount: 15,
          createdAt: "2023-04-23 08:10:10",
          deletedAt: "",
          author: {
            avatarID: 5,
            nickname: "작성자5",
          },
        },
      ],
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
      commentID: 2,
      content: "댓글2",
      childComments: [],
      gameID: 1,
      isLiked: false,
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
      commentID: 3,
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
  likeCount: 12,
  isLiked: false,
  isReported: false,
  panels: [
    {
      image: "/src/pages/gameDummyData/hamster_color.svg",
      title: "집안 다 부수는 햄스터",
      isSelected: false,
      selectedCount: 15,
      location: "left",
    },
    {
      image: "/src/pages/gameDummyData/bug_color.svg",
      title: "점잖은 바퀴벌레",
      isSelected: false,
      selectedCount: 7,
      location: "right",
    },
  ],
  isVoted: false,
  host: {
    avatarID: 1,
    nickname: "avatar",
  },
  createdAt: "2023-05-05 01:01:01",
};

export { gameData };
