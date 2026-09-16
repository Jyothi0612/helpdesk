export type TicketStatus = "open" | "in_progress" | "resolved";
export type TicketPriority = "low" | "medium" | "high" | "urgent";
export type StatusFilterValue = TicketStatus | "all";

export type Ticket = {
  id: string;
  subject: string;
  customer: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
};
