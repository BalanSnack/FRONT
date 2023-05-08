import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>메인페이지</h1>
      <div className="flex gap-2">
        <Link to="/game/1">게임</Link>
        <Link to="/game/create">게임 생성</Link>
        <Link to="/game/update/1">게임 수정</Link>
        <Link to="/category">카테고리</Link>
        <Link to="/category/1">카테고리 내용</Link>
        <Link to="/myinfo">내 정보</Link>
      </div>
    </div>
  );
}
