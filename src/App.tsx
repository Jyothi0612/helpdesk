import { useState } from "react";
import type { StatusFilterValue } from "./types/ticket";
import { tickets } from "./data/tickets";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { StatusFilter } from "./components/StatusFilter";
import { TicketList } from "./components/TicketList";

function App() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilterValue>("all");

  const search = query.toLowerCase().trim();

  const visibleTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(search) ||
      ticket.customer.toLowerCase().includes(search);
    const matchesStatus = status === "all" || ticket.status === status;
    return matchesSearch && matchesStatus;
  });

  const isFiltered = query !== "" || status !== "all";

  function handleClearFilters() {
    setQuery("");
    setStatus("all");
  }

  return (
    <>
      <Header
        title="HelpDesk"
        ticketCount={visibleTickets.length}
        totalCount={tickets.length}
      />
      <SearchBar query={query} onQueryChange={setQuery} />
      <StatusFilter status={status} onStatusChange={setStatus} />
      {isFiltered && (
        <button type="button" onClick={handleClearFilters}>
          Clear filters
        </button>
      )}
      <TicketList tickets={visibleTickets} />
    </>
  );
}

export default App;
