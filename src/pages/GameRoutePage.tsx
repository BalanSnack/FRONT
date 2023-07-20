import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFindJoke } from "@/api/test/testQuery";
import type { JokeResponse } from "@/api/test/test";

export default function GameRoutePage() {
  const navigate = useNavigate();
  const logation = useLocation();
  const { pathname } = logation;
  const theme = pathname.split("/")[1];

  const routeHandler = () => {
    // 임의로 1번으로 이동 시키고 나중에 API 완성되면 id값을 받아서 넣어주기
    navigate(`/${theme}/1`, { replace: true });
  };

  const { data: jokeData } = useFindJoke();

  return (
    <div>
      <h1>{theme} Route 페이지</h1>
      <button onClick={routeHandler}>게임으로 이동</button>
      <div>{jokeData?.punchline}</div>
    </div>
  );
}
