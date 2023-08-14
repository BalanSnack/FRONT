import CategoryBtn from "../CategoryBtn";
import styles from "../CategoryBtn.module.css";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CategoryBtn", () => {
  it("renders collectly", () => {
    const { getByText, getByRole } = render(
      <CategoryBtn type="animal" title="동물" img="polar_bear" />,
    );

    const img = getByRole("img");

    getByText("동물");
    expect(img).toHaveAttribute("src", "src/assets/icons/polar_bear_3d.png");
  });

  it("navigates to the correct path when clicked", () => {
    render(<CategoryBtn type="animal" title="동물" img="polar_bear" />);
    const btn = document.querySelector(`.${styles.btnWrap}`) as HTMLDivElement;

    fireEvent.click(btn);

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/category/animal");
  });
});
