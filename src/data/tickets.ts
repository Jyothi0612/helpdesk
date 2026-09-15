import type { Ticket } from '../types/ticket';

const tickets: Ticket[] = [
    {
        id: '1',
        subject: 'Issue with login',
        customer: 'John Doe',
        status: 'open',
        priority: 'High'
    },
    {
        id: '2',
        subject: 'Error on checkout page',
        customer: 'Jane Smith',
        status: 'in_progress',
        priority: 'Medium'
    },
    {
        id: '3',
        subject: 'Feature request for new dashboard',
        customer: 'Alice Johnson',
        status: 'closed',
        priority: 'Low'
    },
    {
        id: '4',
        subject: 'Bug in mobile app',
        customer: 'Bob Brown',
        status: 'open',
        priority: 'Urgent'
    },
    {
        id: '5',
        subject: 'Request for password reset',
        customer: 'Charlie Davis',
        status: 'closed',
        priority: 'Low'
    }

];

export default tickets;