import { render, screen } from "@testing-library/react";
import { Profile } from "../Profile";

describe("Page Home", () => {
  it("renders the Profile page", () => {
    render(<Profile />);

    const rootElement = screen.getByTestId("pageProfile");
    expect(rootElement).toBeInTheDocument();
  });
});
