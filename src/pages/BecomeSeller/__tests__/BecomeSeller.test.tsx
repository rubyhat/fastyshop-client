import { render, screen } from "@testing-library/react";

import { BecomeSeller } from "../BecomeSeller";
import { TestProviders } from "../../../providers";

describe("Page BecomeSeller", () => {
  it("renders the BecomeSeller page", () => {
    render(
      <TestProviders>
        <BecomeSeller />
      </TestProviders>,
    );

    const rootElement = screen.getByTestId("pageBecomeSeller");
    expect(rootElement).toBeInTheDocument();
  });
});
