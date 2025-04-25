import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Login } from "../Login";

const queryClient = new QueryClient();

describe("Page Login", () => {
  it("renders the Login page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
        ,
      </QueryClientProvider>,
    );

    const rootElement = screen.getByTestId("pageLogin");
    expect(rootElement).toBeInTheDocument();
  });
});
