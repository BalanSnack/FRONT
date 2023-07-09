import React from "react";
import styles from "./NavBar.module.css";
import { useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import MyLogo from "@/components/atoms/MyLogo";

type NavType = "popular" | "new" | "random" | "category" | "myInfo" | "create";

export interface NavItemType {
  label: string;
  link: string;
}

type NavItems = {
  [key in NavType]: NavItemType;
};

type Props = {
  isActive: boolean;
  activeHandler: () => void;
};

export default function NavBar({ isActive, activeHandler }: Props) {
  const location = useLocation();

  const [nowPage, setNowPage] = useState("");

  const navItems: NavItems = {
    popular: {
      label: "인기",
      link: "/popular",
    },
    new: {
      label: "신규",
      link: "/new",
    },
    random: {
      label: "랜덤",
      link: "/random",
    },
    category: {
      label: "카테고리",
      link: "/category",
    },
    myInfo: {
      label: "내 정보",
      link: "/myInfo",
    },
    create: {
      label: "게임추가",
      link: "/game/create",
    },
  };

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setNowPage(path);
  }, []);

  return (
    <div className={`${styles.navContainer} ${isActive ? "justify-end" : "justify-between"}`}>
      {!isActive && <MyLogo size="sm" />}
      <div
        className={`${isActive ? styles.activeNavWrapper : styles.inactiveNavWrapper}`}
        role="nav"
      >
        {!isActive && (
          <div className={styles.navButton} onClick={activeHandler}>
            <Bars3Icon />
          </div>
        )}
        <div className={`${styles.navItemsWrapper} ${!isActive && "hidden"}`}>
          {Object.entries(navItems).map(([key, navItem]) => {
            return <NavItem key={key} navItem={navItem} isCurrentPage={nowPage == key} />;
          })}
        </div>
      </div>
    </div>
  );
}
