import React from "react";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./Toast.module.css";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  message: string;
  type: "success" | "error";
}

export default function Toast({ message, type }: Props) {
  console.log(type);

  const getStyle = () => {
    switch (type) {
      case "success":
        return `${styles.toastWrap} bg-green-400`;
      case "error":
        return `${styles.toastWrap} bg-red-400`;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="w-6 text-back" />;
      case "error":
        return <XCircleIcon className="w-6 text-back" />;
    }
  };

  return (
    <div className={styles.toastOverlay}>
      <div className={getStyle()}>
        {getIcon()}
        <MyText color="white" weight="semi">
          {message}
        </MyText>
      </div>
    </div>
  );
}
