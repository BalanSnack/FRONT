import React from "react";
import NavBar from "../molecules/NavBar/NavBar";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function NavTemplate({ children }: Props) {
  const [isActive, setIsActive] = useState(false);

  const navActive = () => {
    setIsActive(true);
  };

  const navClose = () => {
    setIsActive(false);
  };

  return (
    <div className="flex-1 flex h-full flex-col gap-5">
      <NavBar isActive={isActive} activeHandler={navActive} />
      <div onClick={navClose} className="flex-1">
        {children}
      </div>
    </div>
  );
}
