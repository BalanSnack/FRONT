import React from "react";
import styles from "./NicknameArea.module.css";
import MyInput from "@/components/atoms/MyInput/MyInput";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";
import MyText from "@/components/atoms/MyText/MyText";
import { useState } from "react";

interface Props {
  nickname: string;
  nicknameHandler: React.Dispatch<React.SetStateAction<string>>;
  nicknameChangeHandler: () => void;
}

export default function NicknameArea({ nickname, nicknameHandler, nicknameChangeHandler }: Props) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const EditBtnClickHandler = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
      nicknameChangeHandler();
    }
  };

  return (
    <div className={styles.nicknameAreaBox}>
      {isEdit ? (
        <div className="flex flex-1">
          <MyInput value={nickname} inputHandler={nicknameHandler} />
        </div>
      ) : (
        <MyText weight="semi">{nickname}</MyText>
      )}
      <SquareBtn text={isEdit ? "수정완료" : "수정하기"} clickHandler={EditBtnClickHandler} />
    </div>
  );
}
