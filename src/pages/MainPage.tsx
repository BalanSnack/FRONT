import React from "react";
import MainCardBtn from "@/components/organisms/MainCardBtn/MainCardBtn";
import MyText from "@/components/atoms/MyText/MyText";
import LoginModal from "@/components/organisms/LoginModal/LoginModal";
import { useState } from "react";

export default function MainPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const loginModalHandler = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <div className="flex-1 flex h-full justify-between items-center flex-col">
      <h1 className="flex">밸런스낵</h1>
      <div className="flex w-full flex-col gap-3">
        <MainCardBtn theme="popular" />
        <div className="flex gap-3">
          <MainCardBtn theme="new" />
          <MainCardBtn theme="random" />
          <MainCardBtn theme="category" />
        </div>
      </div>
      <div
        onClick={loginModalHandler}
        className="cursor-pointer underline underline-offset-4 decoration-main"
      >
        <MyText weight="semi">로그인하고 더 많은 서비스 체험하기</MyText>
      </div>
      <LoginModal isOpen={isLoginModalOpen} closeModal={loginModalHandler} />
    </div>
  );
}
