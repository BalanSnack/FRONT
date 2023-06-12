import React from "react";
import { hostData, commentData, likeData } from "./dummyData/data";
import GameItem from "@/components/molecules/GameItem/GameItem";
import MyInfoCommentItem from "@/components/organisms/MyInfoContentTable/MyInfoCommentItem/MyInfoCommentItem";
import Pagination from "@/components/molecules/Pagination/Pagination";
import MyText from "@/components/atoms/MyText/MyText";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  selectedContent: "host" | "comment" | "like";
}

export default function MyInfoContentList({ selectedContent }: Props) {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const pageHandler = (page: number) => {
    setPage(page);
  };

  const getData = (selectedContent: Props["selectedContent"]) => {
    if (selectedContent === "host") {
      return hostData.games.map((game) => <GameItem gameData={game} />);
    } else if (selectedContent === "comment") {
      return commentData.comments.map((comment) => <MyInfoCommentItem commentData={comment} />);
    } else if (selectedContent === "like") {
      return likeData.games.map((game) => <GameItem gameData={game} />);
    }
  };

  useEffect(() => {
    setPage(1);
    if (selectedContent === "host") {
      setTotalPage(hostData.totalPageNumber);
    } else if (selectedContent === "comment") {
      setTotalPage(commentData.totalPageNumber);
    } else if (selectedContent === "like") {
      setTotalPage(likeData.totalPageNumber);
    }
  }, [selectedContent]);
  return (
    <div className="flex-1 flex-col flex gap-2">
      {totalPage ? (
        <>
          <div>{getData(selectedContent)}</div>
          <div className="w-full flex justify-center">
            <Pagination page={page} totalPage={totalPage} pageHandler={pageHandler} />
          </div>
        </>
      ) : (
        <div className="flex-1 mt-40 flex items-center justify-center">
          <MyText color="font2" weight="semi">
            기록이 없습니다
          </MyText>
        </div>
      )}
    </div>
  );
}
