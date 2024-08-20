import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { Button } from "./button.component";

describe("Button component", () => {
  it("should be rendered correctly", () => {
    render(<Button>Button</Button>);

    const button = screen.getByText("Button");

    expect(button).toBeInTheDocument();
  });

  it("must match the snapshot", () => {
    expect(<Button>Button</Button>).toMatchFileSnapshot("./__snapshots__/button.snapshot.html");
  });
});
