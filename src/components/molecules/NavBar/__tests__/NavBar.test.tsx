import NavBar from "../NavBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import styles from "../NavBar.module.css";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn().mockReturnValue({ pathname: "/popular" }),
}));

describe("NavBar", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <NavBar isActive={false} activeHandler={() => {}} />
      </BrowserRouter>,
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders NavBar with active", () => {
    render(
      <BrowserRouter>
        <NavBar isActive={true} activeHandler={() => {}} />
      </BrowserRouter>,
    );

    const navBarElement = screen.getByRole("nav");
    expect(navBarElement.classList.contains(styles.activeNavWrapper)).toBeTruthy();
    expect(navBarElement.classList.contains(styles.inactiveNavWrapper)).toBeFalsy();
  });

  it("renders NavBar with inactive", () => {
    render(
      <BrowserRouter>
        <NavBar isActive={false} activeHandler={() => {}} />
      </BrowserRouter>,
    );

    const navBarElement = screen.getByRole("nav");
    expect(navBarElement.classList.contains(styles.inactiveNavWrapper)).toBeTruthy();
    expect(navBarElement.classList.contains(styles.activeNavWrapper)).toBeFalsy();
  });

  it("renders collectly active NavItem", () => {
    render(
      <BrowserRouter>
        <NavBar isActive={true} activeHandler={() => {}} />
      </BrowserRouter>,
    );
    const popularNavItem = screen.getByText("인기");
    const newNavItem = screen.getByText("신규");

    expect(popularNavItem.classList.contains("text-back")).toBeTruthy();
    expect(newNavItem.classList.contains("text-font2")).toBeTruthy();
  });
});
