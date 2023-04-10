import React from "react";
import styels from "./MyText.module.css";

interface myTextProps {
  value: string;
}

export default function MyText({ value }: myTextProps) {
  return <div className={styels.myTextBox}>{value}</div>;
}
