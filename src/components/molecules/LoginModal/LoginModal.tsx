import React from "react";
import MyModal from "@/components/atoms/MyModal/MyModal";
import MyText from "@/components/atoms/MyText/MyText";
import LongBtn from "@/components/atoms/LongBtn/LongBtn";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function LoginModal({ isOpen, closeModal }: Props) {
  return (
    <MyModal isOpen={isOpen} closeModal={closeModal}>
      <MyText size="lg" weight="semi" color="font1">
        로그인
      </MyText>
      <div className="flex flex-col gap-3 mt-5 w-full">
        <LongBtn theme="google" />
        <LongBtn theme="kakao" />
      </div>
      {/* <div className="flex flex-col items-center text-center">
        <MyText size="sm">
          By creating an account, you agree to BalanSnack Terms of Use, Privacy Policy and Cookie
          Policy
        </MyText>
      </div> */}
    </MyModal>
  );
}
