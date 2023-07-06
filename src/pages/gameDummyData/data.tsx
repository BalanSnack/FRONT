import type { Game } from "@/types/game";

const gameData: Game = {
  gameID: 1,
  title: "둘 중 하나만 고른다면?",
  comments: [],
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
