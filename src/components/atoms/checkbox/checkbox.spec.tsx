import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { Checkbox } from ".";

describe("Checkbox component", () => {
  it("should be rendered correctly", () => {
    render(<Checkbox />);

    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  it("must match the snapshot", () => {
    expect(<Checkbox />).toMatchFileSnapshot("./__snapshots__/checkbox.snapshot.html");
  });
});
