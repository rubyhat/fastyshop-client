import { render, screen } from "@testing-library/react";

import { Seller } from "../Seller";
import { TestProviders } from "../../../providers";

describe("Page Seller", () => {
  it("renders the Seller page", () => {
    render(
      <TestProviders>
        <Seller />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageSeller");
    expect(rootElement).toBeInTheDocument();
  });
});
