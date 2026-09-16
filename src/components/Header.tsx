type HeaderProps = {
    title: string;
    ticketCount: number;
}

export function Header({title, ticketCount}: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{ticketCount} tickets</p>
        </header>
    )
}