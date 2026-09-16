type HeaderProps = {
  title: string;
  ticketCount: number;
  totalCount: number;
};

export function Header({ title, ticketCount, totalCount }: HeaderProps) {
  const countText =
    ticketCount === totalCount
      ? `${totalCount} tickets`
      : `${ticketCount} of ${totalCount} tickets`;

  return (
    <header>
      <h1>{title}</h1>
      <p>{countText}</p>
    </header>
  );
}
