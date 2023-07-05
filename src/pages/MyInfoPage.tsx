import React from "react";
import NicknameArea from "@/components/organisms/NicknameArea/NicknameArea";
import MyInfoContentTable from "@/components/organisms/MyInfoContentTable/MyInfoContentTable/MyInfoContentTable";
import { useState } from "react";
import NavTemplate from "@/components/templates/NavTemplate";

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
    <NavTemplate>
      <div className="flex-1 flex-col flex gap-5">
        <NicknameArea
          nickname={nickname}
          nicknameHandler={nicknameHandler}
          nicknameChangeHandler={nicknameChangeHandler}
        />
        <MyInfoContentTable />
      </div>
    </NavTemplate>
  );
}
