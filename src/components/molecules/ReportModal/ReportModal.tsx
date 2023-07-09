import React from "react";
import styles from "./ReportModal.module.css";
import MyModal from "@/components/atoms/MyModal/MyModal";
import MyText from "@/components/atoms/MyText/MyText";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  nickname: string;
  detail: string;
}

type ReportReason = "content" | "abuse" | "duplicate";
type ReportReasonType = {
  [key in ReportReason]: {
    title: string;
    desc: string;
  };
};

export default function ReportModal({ isOpen, closeModal, nickname, detail }: Props) {
  const [reason, setReason] = React.useState<string>("");
  const reasonClickHandler = (val: ReportReason) => {
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

  const reportReason: ReportReasonType = {
    content: {
      title: "부적합한 주제",
      desc: "다른 사용자에게 불쾌감을 주거나 논란을 야기할 수 있는 내용",
    },
    abuse: {
      title: "욕설 및 비방",
      desc: "다른 사용자에게 욕설이나 비방을 하는 내용",
    },
    duplicate: {
      title: "중복 게시물",
      desc: "이미 게시된 내용과 동일한 내용",
    },
  };

  const reportReasonList = Object.keys(reportReason).map((key) => {
    const reasonKey = key as ReportReason;
    return (
      <div
        className={`${styles.reasonBox} ${reason == reasonKey && styles.selectedReasonBox}`}
        onClick={() => reasonClickHandler(reasonKey)}
        key={key}
      >
        <MyText weight="semi">{reportReason[reasonKey].title}</MyText>
        <MyText size="sm" color="font1">
          {reportReason[reasonKey].desc}
        </MyText>
      </div>
    );
  });

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
          <MyText weight="semi">{nickname}</MyText>
          <MyText size="sm" color="font1">
            {detail}
          </MyText>
        </div>
        <div className="flex flex-col gap-3">
          <MyText weight="bold">신고 사유</MyText>
          {reportReasonList}
        </div>
        <div className="flex justify-center gap-3 my-2">
          <SquareBtn text="취소" clickHandler={closeModal} />
          <SquareBtn text="신고하기" clickHandler={reportClickHandler} />
        </div>
      </div>
    </MyModal>
  );
}