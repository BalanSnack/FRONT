import React from "react";
import NavTemplate from "@/components/templates/NavTemplate";
import CategoryBtn from "@/components/organisms/CategoryBtn/CategoryBtn";

const categoryList = [
  {
    type: "relationship",
    title: "연애",
    img: "red_heart",
  },
  {
    type: "situation",
    title: "상황",
    img: "red_question_mark",
  },
  {
    type: "food",
    title: "음식",
    img: "hamburger",
  },
  {
    type: "celebrity",
    title: "연예",
    img: "television",
  },
  {
    type: "animal",
    title: "동물",
    img: "polar_bear",
  },
  {
    type: "sport",
    title: "스포츠",
    img: "soccer_ball",
  },
  {
    type: "game",
    title: "게임",
    img: "robot",
  },
  {
    type: "mbti",
    title: "MBTI",
    img: "thinking_face",
  },
  {
    type: "music",
    title: "음악",
    img: "musical_note",
  },
  {
    type: "politics",
    title: "정치",
    img: "man_shrugging",
  },
  {
    type: "comics",
    title: "만화",
    img: "closed_book",
  },
  {
    type: "etc",
    title: "기타",
    img: "large_blue_diamond",
  },
];

export default function CategoryListPage() {
  return (
    <NavTemplate>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full">
          {categoryList.map((category) => (
            <CategoryBtn
              type={category.type}
              title={category.title}
              img={category.img}
              key={category.title}
            />
          ))}
        </div>
      </div>
    </NavTemplate>
  );
}
