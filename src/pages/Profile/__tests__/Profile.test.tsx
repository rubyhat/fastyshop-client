import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Profile } from "../Profile";

describe("Page Profile", () => {
  it("renders the Profile page", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pageProfile");
    expect(rootElement).toBeInTheDocument();
  });
});
