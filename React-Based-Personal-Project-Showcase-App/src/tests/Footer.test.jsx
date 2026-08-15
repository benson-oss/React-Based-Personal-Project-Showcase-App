import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("shows copyright information and legal links", () => {
    render(<Footer />);

    expect(
      screen.getByText(/2026 Product Admin Portal\. All rights reserved\./i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Terms & Conditions" }),
    ).toHaveAttribute("href", "/terms");
    expect(
      screen.getByRole("link", { name: "Privacy Policy" }),
    ).toHaveAttribute("href", "/privacy");
  });
});
