import type { Ticket } from "../types/ticket";
import { PriorityBadge } from "./PriorityBadge";

type TicketListProps = {
  tickets: Ticket[];
};

export function TicketList({ tickets }: TicketListProps) {
  if (tickets.length === 0) {
    return <p role="status">No tickets match your filters.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Subject</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.subject}</td>
            <td>{ticket.customer}</td>
            <td>{ticket.status}</td>
            <td>
              <PriorityBadge priority={ticket.priority} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
