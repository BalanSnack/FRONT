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
  it("renders collectly", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isCurrentPage={false} />
      </BrowserRouter>,
    );
    expect(screen.getByText("인기")).toBeInTheDocument();
  });

  it("renders NavItem with active", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isCurrentPage={true} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    expect(navItemElement.classList.contains(styles.activeNavItem)).toBeTruthy();
  });

  it("renders NavItem with inactive", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isCurrentPage={false} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    expect(navItemElement.classList.contains(styles.inactiveNavItem)).toBeTruthy();
  });

  it("has correct link", () => {
    render(
      <BrowserRouter>
        <NavItem navItem={mockNavItem} isCurrentPage={false} />
      </BrowserRouter>,
    );

    const navItemElement = screen.getByRole("link");
    expect(navItemElement).toHaveAttribute("href", "/popular");
  });
});
