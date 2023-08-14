import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyText from "../MyText";

describe("MyInput", () => {
  let testDiv: HTMLElement;
  let textField: HTMLElement;

  beforeEach(() => {
    testDiv = document.createElement("div");
    testDiv.setAttribute("id", "testDiv");
    document.body.appendChild(testDiv);
  });

  afterEach(() => {
    document.body.removeChild(testDiv);
  });

  it("renders text field", () => {
    const initialValue = "Hello";
    render(<MyText>{initialValue}</MyText>, { container: testDiv });
    textField = screen.getByTestId("textField");

    // 렌더링 테스트
    expect(textField).toBeInTheDocument();
    expect(textField.textContent).toBe("Hello");
  });
});
