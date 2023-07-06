import React from "react";

interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
}

const getLogo = (size: "sm" | "lg") => {
  switch (size) {
    case "sm":
      return <img src="/src/assets/BalanSnack_logo_s.png" />;
    case "lg":
      return <img src="/src/assets/BalanSnack_logo_l.png" />;
  }
};

export default function MyLogo({ size = "sm", className }: LogoProps) {
  return <div className={`${className}`}>{getLogo(size)}</div>;
}
