import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";

describe("Page Cart", () => {
  it("renders the Cart page", () => {
    render(<Cart />);

    const rootElement = screen.getByTestId("pageCart");
    expect(rootElement).toBeInTheDocument();
  });
});
