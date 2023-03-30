import MyModal from "../MyModal";
import styles from "../MyModal.module.css";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MyModal", () => {
  it("renders children when isOpen is true", () => {
    render(
      <MyModal isOpen={true} closeModal={() => {}}>
        <h1>Test Modal</h1>
      </MyModal>,
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("does not render children when isOpen is false", () => {
    render(
      <MyModal isOpen={false} closeModal={() => {}}>
        <h1>Test Modal</h1>
      </MyModal>,
    );
    expect(screen.queryByText("Test Modal")).toBeNull();
  });

  it("calls closeModal when overlay is clicked", () => {
    const closeModalMock = jest.fn();

    render(
      <MyModal isOpen={true} closeModal={closeModalMock}>
        <h1>Test Modal</h1>
      </MyModal>,
    );

    const modalOverlay = screen.getByTestId("modalOverlay");
    fireEvent.click(modalOverlay);

    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it("calls closeModal when XMarkIcon is clicked", () => {
    const closeModalMock = jest.fn();

    render(
      <MyModal isOpen={true} closeModal={closeModalMock}>
        <h1>Test Modal</h1>
      </MyModal>,
    );

    const xMarkIcon = screen.getByTestId("xMarkIcon");
    fireEvent.click(xMarkIcon);

    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });
});