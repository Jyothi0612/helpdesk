import type { StatusFilterValue } from "../types/ticket";

type StatusFilterProps = {
  status: StatusFilterValue;
  onStatusChange: (nextStatus: StatusFilterValue) => void;
};

export function StatusFilter({ status, onStatusChange }: StatusFilterProps) {
  return (
    <select
      value={status}
      onChange={(e) => onStatusChange(e.target.value as StatusFilterValue)}
      aria-label="Filter tickets by status"
    >
      <option value="all">All</option>
      <option value="open">Open</option>
      <option value="in_progress">In progress</option>
      <option value="resolved">Resolved</option>
    </select>
  );
}
