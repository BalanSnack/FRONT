import GameCreateOrUpdatePage from "@/pages/GameCreateOrUpdatePage";
import GameRoutePage from "@/pages/GameRoutePage";
import GamePage from "@/pages/GamePage";

export default [
  {
    path: "game",
    children: [
      { path: "create", element: <GameCreateOrUpdatePage /> },
      { path: "update/:gameId", element: <GameCreateOrUpdatePage /> },
    ],
  },
  {
    path: "/popular",
    children: [
      { path: "", element: <GameRoutePage /> },
      { path: ":gameId", element: <GamePage /> },
    ],
  },
  {
    path: "new",
    children: [
      { path: "", element: <GameRoutePage /> },
      { path: ":gameId", element: <GamePage /> },
    ],
  },
  {
    path: "random",
    children: [
      { path: "", element: <GameRoutePage /> },
      { path: ":gameId", element: <GamePage /> },
    ],
  },
];
