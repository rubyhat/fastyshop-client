import { render, screen } from "@testing-library/react";

import { Footer } from "../components/Footer";
import { TestProviders } from "../../../providers";

describe("Component Footer", () => {
  it("renders the Footer component", () => {
    render(
      <TestProviders>
        <Footer />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("footer");
    expect(rootElement).toBeInTheDocument();
  });

  it("renders the Footer component without throwing", () => {
    expect(() =>
      render(
        <TestProviders>
          <Footer />
        </TestProviders>,
      ),
    ).not.toThrow();
  });
});
