import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GameRoutePage() {
  const navigate = useNavigate();
  const logation = useLocation();
  const { pathname } = logation;
  const theme = pathname.split("/")[1];

  const routeHandler = () => {
    // 임의로 1번으로 이동 시키고 나중에 API 완성되면 id값을 받아서 넣어주기
    navigate(`/${theme}/1`, { replace: true });
  };

  return (
    <div>
      <h1>{theme} Route 페이지</h1>
      <button onClick={routeHandler}>게임으로 이동</button>
    </div>
  );
}
