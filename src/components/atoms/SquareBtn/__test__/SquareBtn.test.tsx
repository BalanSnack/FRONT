import { render, screen, fireEvent } from "@testing-library/react";
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

  // 버튼 생성 여부 테스트
  it("shows the square btn", () => {
    render(<SquareBtn isSelected={false} theme="basic" text="Test" clickHandler={() => {}} />, {
      container: testSquareBtnDiv,
    });
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  // icon 생성 여부 테스트
  it("has an icon in square btn", () => {
    render(<SquareBtn theme="gameLike" icon="heart" />, { container: testSquareBtnDiv });
    expect(screen.getByTestId("squareBtnIcon")).toBeInTheDocument();
  });

  // click 이벤트 테스트
  it("calls clickHandler when btn is clicked", () => {
    const clickMock = jest.fn();
    render(
      <SquareBtn theme="gameLike" icon="heart" isSelected={false} clickHandler={clickMock} />,
      { container: testSquareBtnDiv },
    );
    expect(screen.getByTestId("squareBtnIcon")).toBeInTheDocument();
    const squareBtn = screen.getByTestId("squareBtn");

    fireEvent.click(squareBtn);

    expect(squareBtn).toBeCalled();
  });
});
