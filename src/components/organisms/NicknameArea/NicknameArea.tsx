import React from "react";
import styles from "./NicknameArea.module.css";
import MyInput from "@/components/atoms/MyInput/MyInput";
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
          <MyInput value={nickname} inputHandler={nicknameHandler} rounded={true} />
        </div>
      ) : (
        <MyText color="font1" weight="semi">
          {nickname}
        </MyText>
      )}
      <div className={styles.nicknameChangeBtn} onClick={EditBtnClickHandler}>
        <MyText weight="medium">{isEdit ? "수정완료" : "수정하기"}</MyText>
      </div>
    </div>
  );
}
