import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";
import { NavItemType } from "./NavBar";
import MyText from "@/components/atoms/MyText/MyText";
import {
  FireIcon,
  LightBulbIcon,
  ArrowPathIcon,
  RectangleGroupIcon,
  UserCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

interface Props {
  navItem: NavItemType;
  isCurrentPage: boolean;
}

export default function NavItem({ navItem, isCurrentPage }: Props) {
  const getIcon = () => {
    switch (navItem.label) {
      case "인기":
        return <FireIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      case "신규":
        return <LightBulbIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      case "랜덤":
        return <ArrowPathIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      case "카테고리":
        return <RectangleGroupIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      case "내 정보":
        return <UserCircleIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      case "게임추가":
        return <PlusIcon className={isCurrentPage ? "w-7" : "w-6"} />;
      default:
        return null;
    }
  };

  return (
    <Link
      to={navItem.link}
      className={`${styles.navItem} ${
        isCurrentPage ? styles.activeNavItem : styles.inactiveNavItem
      }`}
    >
      {getIcon()}
      <MyText size="sm" color={isCurrentPage ? "white" : "font2"}>
        {navItem.label}
      </MyText>
    </Link>
  );
}
