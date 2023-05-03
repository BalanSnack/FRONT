import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import MyIcon from "../MyIcon";

describe("MyIcon", () => {
  const sizes = {
    sm: "w-[2rem]",
    md: "w-[3rem]",
    lg: "w-[5rem]",
  };

  it("renders the icon with the correct name", () => {
    render(<MyIcon name="cat_face" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "src/assets/icons/cat_face_3d.png");
  });

  it("renders the icon with the correct size", () => {
    render(<MyIcon name="cat_face" size="sm" />);
    const img = screen.getByRole("img");
    expect(img).toHaveClass(sizes["sm"]);
  });
});
