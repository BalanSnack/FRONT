import CategoryListPage from "@/pages/CategoryListPage";
import CategoryContentPage from "@/pages/CategoryContentPage";

export default [
  {
    path: "category",
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
];
