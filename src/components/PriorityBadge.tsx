import type { TicketPriority } from "../types/ticket";

const priorityLabels: Record<TicketPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  urgent: "Urgent",
};

const priorityColors: Record<TicketPriority, string> = {
  low: "green",
  medium: "purple",
  high: "orange",
  urgent: "red",
};

type PriorityBadgeProps = {
  priority: TicketPriority;
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span style={{ color: priorityColors[priority] }}>
      {priorityLabels[priority]}
    </span>
  );
}