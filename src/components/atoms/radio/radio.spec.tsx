import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { Radio } from "./radio.component";

describe("Checkbox component", () => {
  it("should be rendered correctly", () => {
    render(<Radio name="radio" />);

    const radio = screen.getByTestId("radio");

    expect(radio).toBeInTheDocument();
  });

  it("must match the snapshot", () => {
    expect(<Radio />).toMatchFileSnapshot("./__snapshots__/radio.snapshot.html");
  });
});
