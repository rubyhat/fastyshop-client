import { render, screen } from "@testing-library/react";
import { ShopDetails } from "../ShopDetails";

describe("Page ShopDetails", () => {
  it("renders the ShopDetails page", () => {
    render(<ShopDetails />);

    const rootElement = screen.getByTestId("pageShopDetails");
    expect(rootElement).toBeInTheDocument();
  });
});
