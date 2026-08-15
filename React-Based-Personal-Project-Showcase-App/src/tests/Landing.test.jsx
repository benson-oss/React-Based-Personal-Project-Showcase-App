import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { getProductsMock } = vi.hoisted(() => ({
  getProductsMock: vi.fn(),
}));

vi.mock("../API/Products", () => ({
  getProducts: getProductsMock,
}));

vi.mock("../components/ProductsList", () => ({
  default: ({ getProducts }) => (
    <button type="button" onClick={getProducts}>
      Load products
    </button>
  ),
}));

import Landing from "../pages/Landing";

describe("Landing", () => {
  beforeEach(() => {
    getProductsMock.mockReset();
  });

  it("introduces the store and links to the product catalogue", () => {
    render(<Landing />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Coffee R Us" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View products" }),
    ).toHaveAttribute("href", "#products");
  });

  it("passes getProducts to ProductsList", () => {
    render(<Landing />);

    fireEvent.click(screen.getByRole("button", { name: "Load products" }));

    expect(getProductsMock).toHaveBeenCalledOnce();
  });
});
