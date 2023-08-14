import React from "react";
import MyIcon from "@/components/atoms/MyIcon/MyIcon";
import MyText from "@/components/atoms/MyText/MyText";
import styles from "./CategoryBtn.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  type: string;
  title: string;
  img: string;
}

export default function CategoryBtn({ type, title, img }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.btnWrap} onClick={() => navigate(`/category/${type}`)}>
      <MyIcon name={img} />
      <MyText weight="semi" size="md">
        {title}
      </MyText>
    </div>
  );
}
