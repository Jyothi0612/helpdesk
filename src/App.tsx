import { tickets } from "./data/tickets";
import { Header } from "./components/Header";
import { TicketList } from "./components/TicketList";

function App() {
  return (
    <>
      <Header title="HelpDesk" ticketCount={tickets.length} />
      <TicketList tickets={tickets} />
    </>
  );
}

export default App;
