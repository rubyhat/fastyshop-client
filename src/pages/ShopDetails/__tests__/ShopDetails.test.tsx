import { render, screen } from "@testing-library/react";
import { ShopDetails } from "../ShopDetails";
import { TestProviders } from "../../../providers";

describe("Page ShopDetails", () => {
  it("renders the ShopDetails page", () => {
    render(
      <TestProviders>
        <ShopDetails />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageShopDetails");
    expect(rootElement).toBeInTheDocument();
  });
});
