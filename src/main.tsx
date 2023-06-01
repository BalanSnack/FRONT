import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import GameRoutePage from "./pages/GameRoutePage";
import GameCreateOrUpdatePage from "./pages/GameCreateOrUpdatePage";
import CategoryListPage from "./pages/CategoryListPage";
import CategoryContentPage from "./pages/CategoryContentPage";
import MyInfoPage from "./pages/MyInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/game",
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
    path: "/new",
    children: [
      { path: "", element: <GameRoutePage /> },
      { path: ":gameId", element: <GamePage /> },
    ],
  },
  {
    path: "/random",
    children: [
      { path: "", element: <GameRoutePage /> },
      { path: ":gameId", element: <GamePage /> },
    ],
  },
  {
    path: "/category",
    children: [
      {
        path: "",
        element: <CategoryListPage />,
      },
      {
        path: ":categoryName",
        element: <CategoryContentPage />,
      },
    ],
  },
  { path: "/myinfo", element: <MyInfoPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="m-auto h-screen max-w-[640px] py-10 px-5">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
