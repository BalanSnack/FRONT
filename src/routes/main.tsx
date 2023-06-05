import { createBrowserRouter } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import MyInfoPage from "@/pages/MyInfoPage";
import gameRoute from "@/routes/game";
import categoryRoute from "@/routes/category";

export default createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/myinfo",
    element: <MyInfoPage />,
  },
  ...gameRoute,
  ...categoryRoute,
]);
