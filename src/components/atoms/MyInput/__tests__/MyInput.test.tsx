import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyInput from "../MyInput";
import React, { useState } from "react";

describe("MyInput", () => {
  let testDiv: HTMLElement;
  let inputField: HTMLInputElement;

  beforeEach(() => {
    testDiv = document.createElement("div");
    testDiv.setAttribute("id", "testDiv");
    document.body.appendChild(testDiv);
  });

  afterEach(() => {
    document.body.removeChild(testDiv);
  });

  // 렌더링 테스트
  it("renders input field (clearShow = false)", () => {
    const initialValue = "Hello";
    render(
      <MyInput value={initialValue} inputHandler={() => {}} isClearShow={false} rounded={false} />,
      { container: testDiv },
    );
    inputField = screen.getByRole("textbox");

    expect(screen.getAllByDisplayValue(initialValue)).toBeTruthy();
  });

  it("renders input field with (clearShow = true)", () => {
    const initialValue = "Hello";
    render(
      <MyInput value={initialValue} inputHandler={() => {}} isClearShow={true} rounded={false} />,
    );

    inputField = screen.getByTestId("textInput");
    const clearBtn = screen.getByTestId("clearButton");

    // 렌더링 테스트
    expect(inputField).toBeInTheDocument();
    expect(clearBtn).toBeInTheDocument();
  });

  it("renders input field with (clearShow = true)", () => {
    const { result } = renderHook(() => useState("hello"));
    const [val, setVal] = result.current;
    const onChange: React.Dispatch<React.SetStateAction<string>> = (value) => {
      setVal(value);
    };

    render(<MyInput value={val} inputHandler={onChange} isClearShow={true} rounded={false} />);

    // 초기화 버튼 클릭 테스트
    const clearBtn = screen.getByTestId("clearButton");
    fireEvent.click(clearBtn);
    expect(inputField.textContent).toBe("");
  });
});
