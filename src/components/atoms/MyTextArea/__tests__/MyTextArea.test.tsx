import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyTextArea from "../MyTextArea";
import { useState } from "react";

describe("MyInput", () => {
  let textAreaField: HTMLTextAreaElement;

  it("renders text field", () => {
    const { result } = renderHook(() => useState("hello"));
    const [val, setVal] = result.current;
    const onChange: React.Dispatch<React.SetStateAction<string>> = (value) => {
      setVal(value);
    };

    render(<MyTextArea value={val} inputHandler={onChange} />);
    textAreaField = screen.getByTestId("textAreaField");

    // 렌더링 테스트
    expect(screen.getAllByDisplayValue(val)).toBeTruthy();
  });

  it("renders text field", () => {
    const { result } = renderHook(() => useState("hello"));
    const [val, setVal] = result.current;
    const onChange: React.Dispatch<React.SetStateAction<string>> = (value) => {
      setVal(value);
    };

    render(<MyTextArea value={val} inputHandler={onChange} />);
    textAreaField = screen.getByTestId("textAreaField");

    onChange("CHANGED");
    expect(val).toBe("CHANGED");
  });
});
