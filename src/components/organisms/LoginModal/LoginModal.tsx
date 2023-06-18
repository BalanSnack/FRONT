import React from "react";
import MyModal from "@/components/atoms/MyModal/MyModal";
import MyText from "@/components/atoms/MyText/MyText";
import LongBtn from "@/components/atoms/LongBtn/LongBtn";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

/**
 * 일단 임시로 설정해둔 것으로
 * 나중에 경식이에게 redirectURL과 API KEY만 받아보면 됩니다.
 */
const SocialKakao = () => {
  const Rest_api_key = "648c428cd7ea545370c20e76882de18a"; //REST API KEY
  const redirect_uri = "http://localhost:5173/auth"; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return handleLogin;
};

export default function LoginModal({ isOpen, closeModal }: Props) {
  return (
    <MyModal isOpen={isOpen} closeModal={closeModal}>
      <MyText size="lg" weight="semi" color="font1">
        로그인
      </MyText>
      <div className="flex flex-col gap-3 my-10">
        <LongBtn theme="google" />
        <div onClick={SocialKakao()}>
          <LongBtn theme="kakao" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <MyText size="sm">By creating an account, you agree to BalanSnack Terms of Use,</MyText>
        <MyText size="sm">Privacy Policy and Cookie Policy</MyText>
      </div>
    </MyModal>
  );
}
