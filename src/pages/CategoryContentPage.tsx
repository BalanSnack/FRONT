import React, { useEffect, useState } from "react";
import NavTemplate from "@/components/templates/NavTemplate";
import CategoryTopArea from "@/components/organisms/CategoryHeader/CategoryHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash";

type CategoryList = {
  [key: string]: {
    title: string;
    img: string;
  };
};

export default function CategoryContentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryType: string = location.pathname.split("/")[2];
  const [page, setPage] = React.useState<number>(Number(location.search.split("=")[1]) | 1);
  const keyword = location.search.split("=")[2] || "";

  const keywordHanlder = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({
      pathname: `/category/${categoryType}`,
      search: e.target.value ? `?page=${page}&q=${e.target.value}` : `?page=${page}`,
    });
  }, 500);

  const categoryList: CategoryList = {
    relationship: {
      title: "연애",
      img: "red_heart",
    },
    situation: {
      title: "상황",
      img: "red_question_mark",
    },
    food: {
      title: "음식",
      img: "hambuger",
    },
    celebrity: {
      title: "연예",
      img: "television",
    },
    animal: {
      title: "동물",
      img: "polar_bear",
    },
    sport: {
      title: "스포츠",
      img: "soccer_ball",
    },
    game: {
      title: "게임",
      img: "robot",
    },
    mbti: {
      title: "MBTI",
      img: "thinking_face",
    },
    music: {
      title: "음악",
      img: "musical_note",
    },
    politics: {
      title: "정치",
      img: "man_shrugging",
    },
    comics: {
      title: "만화",
      img: "closed_book",
    },
    etc: {
      title: "기타",
      img: "large_blue_diamond",
    },
  };

  return (
    <NavTemplate>
      <CategoryTopArea
        category={categoryList[categoryType]}
        keyword={keyword}
        keywordHanlder={keywordHanlder}
      />
    </NavTemplate>
  );
}
