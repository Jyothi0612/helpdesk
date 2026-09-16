type SearchBarProps = {
  query: string;
  onQueryChange: (nextQuery: string) => void;
};

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <input
      type="search"
      placeholder="Search subject or customer…"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      aria-label="Search subject or customer"
    />
  );
}
