import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Login } from "../Login";

describe("Page Login", () => {
  it("renders the Login page", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const rootElement = screen.getByTestId("pageLogin");
    expect(rootElement).toBeInTheDocument();
  });
});
