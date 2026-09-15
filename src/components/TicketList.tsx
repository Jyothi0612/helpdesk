import type { Ticket } from '../types/ticket';

type TicketListProps = {
    tickets: Ticket[];
}

export function TicketList({ tickets }: TicketListProps) {
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
                        <td>{ticket.priority === 'Urgent' ? <span style={{ color: 'red' }}>{ticket.priority}</span> : ticket.priority}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}