import { render, screen } from "@testing-library/react";
import { Cart } from "../Cart";
import { TestProviders } from "../../../providers";

describe("Page Cart", () => {
  it("renders the Cart page", () => {
    render(
      <TestProviders>
        <Cart />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageCart");
    expect(rootElement).toBeInTheDocument();
  });
});
