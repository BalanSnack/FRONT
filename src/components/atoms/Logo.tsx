import React from "react";

interface LogoProps {
  size: "s" | "l";
}

const getLogo = ({ size }: LogoProps) => {
  switch (size) {
    case "s":
      return <img src="src/assets/BalanSnack_logo_s.png" />;
    case "l":
      return <img src="src/assets/BalanSnack_logo_l.png" />;
  }
};

export default function Logo(props: LogoProps) {
  return <div>{getLogo(props)}</div>;
}
