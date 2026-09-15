//Import the tickets and TicketList into App.tsx and render the table.

import tickets from './data/tickets';
import { TicketList } from './components/TicketList';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <TicketList tickets={tickets} />
    </>
  )
}

export default App
