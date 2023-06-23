import React from "react";
import styles from "./MyModal.module.css";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function MyModal({ isOpen, closeModal, children }: Props) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={handleOverlayClick} data-testid="modalOverlay">
      <div className="bg-back rounded-lg px-5 py-5  min-w-[250px] max-w-sm">
        <div className="flex justify-end mb-3">
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={closeModal}
            data-testid="xMarkIcon"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as Element,
  );
}
