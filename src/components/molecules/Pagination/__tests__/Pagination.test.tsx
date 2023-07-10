import Pagination from "../Pagination";
import styles from "@/components/atoms/SquareBtn/SquareBtn.module.css";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Pagination", () => {
  const mockPageHandler = jest.fn();

  const props = {
    totalPage: 10,
    page: 3,
    pageHandler: mockPageHandler(),
  };

  it("renders page buttons correctly", () => {
    const { getByText } = render(<Pagination {...props} />);

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });
});
