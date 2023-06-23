import React from "react";
import styles from "./ReportModal.module.css";
import MyModal from "@/components/atoms/MyModal/MyModal";
import MyText from "@/components/atoms/MyText/MyText";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function ReportModal({ isOpen, closeModal }: Props) {
  const [reason, setReason] = React.useState<string>("");
  const reasonClickHandler = (val: "content" | "abuse") => {
    setReason(val);
  };

  const reportClickHandler = () => {
    if (reason == "") {
      alert("신고 사유를 선택해주세요.");
      return;
    } else {
      /* 신고 API 작성 */
    }
    closeModal();
  };

  return (
    <MyModal isOpen={isOpen} closeModal={closeModal}>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-1">
          <ExclamationCircleIcon className="w-[2rem] text-main" />
          <MyText size="lg" weight="semi">
            신고하기
          </MyText>
        </div>
        <div className={styles.nicknameBox}>
          <MyText weight="semi">신고할 유저 닉네임</MyText>
          <MyText size="sm" color="font1">
            신고할 댓글 내용
          </MyText>
        </div>
        <div className="flex flex-col gap-3">
          <MyText>신고 사유</MyText>
          <div
            className={`${styles.reasonBox} ${reason == "content" && styles.selectedReasonBox}`}
            onClick={() => reasonClickHandler("content")}
          >
            <MyText weight="semi">부적합한 주제</MyText>
            <MyText size="sm" color="font1">
              다른 사용자에게 불괘감을 주거나 논란을 야기할 수 있는 내용
            </MyText>
          </div>
          <div
            className={`${styles.reasonBox} ${reason == "abuse" && styles.selectedReasonBox}`}
            onClick={() => reasonClickHandler("abuse")}
          >
            <MyText weight="semi">욕설 및 비방</MyText>
            <MyText size="sm" color="font1">
              다른 사용자에게 불괘감을 주거나 논란을 야기할 수 있는 내용
            </MyText>
          </div>
        </div>
        <div className="flex justify-center gap-3 my-2">
          <SquareBtn text="취소" clickHandler={closeModal} />
          <SquareBtn text="신고하기" clickHandler={reportClickHandler} />
        </div>
      </div>
    </MyModal>
  );
}
