import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyInput from "../MyInput";
import React from "react";

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
    inputField = screen.getByTestId("textInput");

    // 렌더링 테스트
    expect(inputField).toBeInTheDocument();
    expect(inputField.value).toBe("Hello");
  });

  // 렌더링 테스트 w/ 초기화 버튼 & 초기화 작동 여부
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

    // 초기화 버튼 클릭 테스트
    fireEvent.click(clearBtn);
    expect(inputField.textContent).toBe("");
  });
});
