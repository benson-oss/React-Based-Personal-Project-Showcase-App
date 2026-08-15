import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "../components/ErrorMessage";

describe("ErrorMessage", () => {
  it("announces the supplied message", () => {
    render(<ErrorMessage message="Unable to load products." />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Unable to load products.",
    );
  });

  it("uses a helpful fallback when no message is supplied", () => {
    render(<ErrorMessage />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Something went wrong. Please try again.",
    );
  });
});
