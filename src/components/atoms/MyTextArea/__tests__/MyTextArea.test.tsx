import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyTextArea from "../MyTextArea";

describe("MyInput", () => {
  let testDiv: HTMLElement;
  let textAreaField: HTMLTextAreaElement;

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
    render(<MyTextArea value={initialValue} inputHandler={() => ()}/>, { container: testDiv });
    textAreaField = screen.getByTestId("textAreaField");

    // 렌더링 테스트
    expect(textAreaField).toBeInTheDocument();
    expect(textAreaField.textContent).toBe("Hello");
  });
});
