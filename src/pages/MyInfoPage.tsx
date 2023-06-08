import React from "react";
import SquareBtn from "@/components/atoms/SquareBtn/SquareBtn";
import NicknameArea from "@/components/organisms/NicknameArea/NicknameArea";
import { useState } from "react";

export default function MyInfoPage() {
  const [nickname, setNickname] = useState<string>("닉네임");

  const nicknameHandler: React.Dispatch<React.SetStateAction<string>> = (value) => {
    setNickname(value);
  };

  const nicknameChangeHandler = () => {
    /* API 요청 코드 작성 */
    console.log(nickname);
  };

  return (
    <div className="flex flex-col gap-5">
      <NicknameArea
        nickname={nickname}
        nicknameHandler={nicknameHandler}
        nicknameChangeHandler={nicknameChangeHandler}
      />
      <div>
        <div className="flex gap-3 justify-between">
          <SquareBtn text="내가 만든 게임" />
          <SquareBtn text="내가 쓴 댓글" />
          <SquareBtn text="좋아요 누른 게임" />
        </div>
      </div>
    </div>
  );
}
