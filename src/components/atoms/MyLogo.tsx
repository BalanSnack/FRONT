import React from "react";

interface LogoProps {
  size?: "sm" | "lg";
}

const getLogo = ({ size = "lg" }: LogoProps) => {
  switch (size) {
    case "sm":
      return <img src="src/assets/BalanSnack_logo_s.png" />;
    case "lg":
      return <img src="src/assets/BalanSnack_logo_l.png" />;
  }
};

export default function MyLogo(props: LogoProps) {
  return <div>{getLogo(props)}</div>;
}
