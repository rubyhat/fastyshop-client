import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Orders } from "../Orders";

const queryClient = new QueryClient();

describe("Page Orders", () => {
  it("renders the Orders page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Orders />
        </MemoryRouter>
        ,
      </QueryClientProvider>,
    );

    const rootElement = screen.getByTestId("pageOrders");
    expect(rootElement).toBeInTheDocument();
  });
});
