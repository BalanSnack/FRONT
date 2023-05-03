import React from "react";

interface Props {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function MyIcon({ name, size = "md" }: Props) {
  const sizes = {
    sm: "w-[2rem]",
    md: "w-[3rem]",
    lg: "w-[5rem]",
  };

  return <img className={sizes[size]} src={`src/assets/icons/${name}_3d.png`} />;
}
