import NavItem from "../NavItem";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavItemType } from "../NavBar";
import styles from "../NavItem.module.css";
import "@testing-library/jest-dom";

const mockNavItem: NavItemType = {
  label: "인기",
  link: "/popular",
};

describe("NavItem", () => {
  it("renders NavItem", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isActive={false} />
      </BrowserRouter>,
    );
    expect(screen.getByText("인기")).toBeInTheDocument();
  });

  it("renders NavItem with active", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isActive={true} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    navItemElement.classList.contains(styles.activeNavItem);
  });

  it("renders NavItem with inactive", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isActive={false} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    navItemElement.classList.contains(styles.inactiveNavItem);
  });

  it("has correct link", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isActive={false} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    expect(navItemElement).toHaveAttribute("href", "/popular");
  });
});
