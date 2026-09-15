export type TicketStatus = "open" | "in_progress" | "closed";
export type TicketPriority = "Low" | "Medium" | "High" | "Urgent";

export type Ticket = {
    id: string;
    subject: string;
    customer: string;
    status: TicketStatus;
    priority: TicketPriority;
}