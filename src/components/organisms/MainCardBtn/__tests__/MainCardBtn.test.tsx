import MainCardBtn from "../MainCardBtn";
import styles from "../MainCardBtn.module.css";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("MainCardBtn", () => {
  const themeStyle = {
    popular: "bg-gradient-to-r from-pink-500 to-sky-500 flex-row-reverse aspect-[4/2]",
    new: "bg-pink-500 flex-col aspect-[5/3]",
    random: "bg-[#DBCCDD] flex-col aspect-[5/3]",
    category: "bg-sky-500 flex-col aspect-[5/3]",
  };

  const themeMsg = {
    popular: "인기",
    new: "신규",
    random: "랜덤",
    category: "카테고리",
  };

  const theme = "popular";

  it("renders collectly", () => {
    const { container } = render(<MainCardBtn theme={theme} />);
    expect(container).toBeInTheDocument();
  });

  it("renders text collectly with theme", () => {
    const { getByText } = render(<MainCardBtn theme={theme} />);
    getByText(themeMsg[theme]);
  });

  it("renders image collectly with theme", () => {
    const { getByRole } = render(<MainCardBtn theme={theme} />);
    const img = getByRole("img");
    expect(img).toHaveAttribute("src", "src/assets/images/popular_card.png");
  });

  it("renders background color collectly with theme", () => {
    const { getByRole } = render(<MainCardBtn theme={theme} />);
    const div = getByRole("mainCardBtn");
    expect(div).toHaveClass(themeStyle[theme]);
  });
});
