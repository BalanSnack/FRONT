import NavTemplate from "../NavTemplate";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn().mockReturnValue({ pathname: "/popular" }),
}));

describe("NavTemplate", () => {
  it("renders NavTemplate component", () => {
    render(
      <BrowserRouter>
        <NavTemplate>
          <div data-testid="content">Content</div>
        </NavTemplate>
      </BrowserRouter>,
    );

    expect(screen.getByRole("navButton")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("toggles the NavBar active state when clicked", () => {
    render(
      <BrowserRouter>
        <NavTemplate>
          <div data-testid="content">Content</div>
        </NavTemplate>
      </BrowserRouter>,
    );

    const navButton = screen.getByRole("navButton");
    const navBarWrap = screen.getByRole("nav");

    expect(navBarWrap.classList.contains("inactiveNavWrapper")).toBeTruthy();

    fireEvent.click(navButton);

    expect(navBarWrap.classList.contains("activeNavWrapper")).toBeTruthy();
  });

  it("toggles the NavBar inactive state when clicked", () => {
    render(
      <BrowserRouter>
        <NavTemplate>
          <div data-testid="content">Content</div>
        </NavTemplate>
      </BrowserRouter>,
    );

    const navButton = screen.getByRole("navButton");
    const navBarWrap = screen.getByRole("nav");
    const content = screen.getByTestId("content");

    fireEvent.click(navButton);

    expect(navBarWrap.classList.contains("activeNavWrapper")).toBeTruthy();

    fireEvent.click(content);

    expect(navBarWrap.classList.contains("inactiveNavWrapper")).toBeTruthy();
  });
});
