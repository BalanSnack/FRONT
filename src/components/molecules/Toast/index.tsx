import React from "react";
import Toast from "./Toast";
import ReactDOM from "react-dom/client";

export const useToast = () => {
  const toast = (message: string, type: "success" | "error") => {
    const container = document.getElementById("toast-root") as HTMLElement;

    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <Toast message={message} type={type} />
      </React.StrictMode>,
    );

    setTimeout(() => {
      ReactDOM.createRoot(container).unmount();
    }, 3000);
  };
  return toast;
};
