import tickets from '../data/tickets'

function Header() {
    return (
        <header>
            <h1>HelpDesk . {tickets.length} tickets</h1>
        </header>
    )
}

export default Header