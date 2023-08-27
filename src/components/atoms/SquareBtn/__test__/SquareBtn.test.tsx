import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SquareBtn from "../SquareBtn";

describe("SquareBtn", () => {
  let testSquareBtnDiv: HTMLElement;

  beforeEach(() => {
    testSquareBtnDiv = document.createElement("div");
    testSquareBtnDiv.setAttribute("id", "testSquareBtnDiv");
    document.body.appendChild(testSquareBtnDiv);
  });

  afterEach(() => {
    document.body.removeChild(testSquareBtnDiv);
  });

  it("renders children when isSelected is true", () => {
    render(<SquareBtn isSelected={true} clickHandler={() => {}} />, {
      container: testSquareBtnDiv,
    });
  });

  it("calls clickHandler when btn is clicked", () => {
    const clickMock = jest.fn();
    render(<SquareBtn isSelected={true} clickHandler={clickMock} />, {
      container: testSquareBtnDiv,
    });
  });
});
