import React from "react";
import styles from "./MyModal.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function MyModal({ isOpen, closeModal, children }: Props) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
          data-testid="modalOverlay"
        >
          <div className="bg-back rounded-lg px-5 py-5">
            <div className="flex justify-end mb-3">
              <XMarkIcon
                className="w-6 h-6 cursor-pointer"
                onClick={closeModal}
                data-testid="xMarkIcon"
              />
            </div>
            <div className="flex flex-col items-center justify-center">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
