import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/main";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="m-auto h-screen max-w-[640px] pt-5 pb-10 px-5">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
