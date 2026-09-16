import type { Ticket } from '../types/ticket';

export const tickets: Ticket[] = [
    {
        id: 'TCK-1042',
        subject: 'Issue with login',
        customer: 'John Doe',
        status: 'open',
        priority: 'high',
        createdAt: '2023-09-15T10:30:00Z'
    },
    {
        id: 'TCK-1043',
        subject: 'Error on checkout page',
        customer: 'Jane Smith',
        status: 'in_progress',
        priority: 'medium',
        createdAt: '2023-09-15T11:45:00Z'
    },
    {
        id: 'TCK-1044',
        subject: 'Feature request for new dashboard',
        customer: 'Alice Johnson',
        status: 'resolved',
        priority: 'low',
        createdAt: '2023-09-15T12:00:00Z'
    },
    {
        id: 'TCK-1045',
        subject: 'Bug in mobile app',
        customer: 'Bob Brown',
        status: 'open',
        priority: 'urgent',
        createdAt: '2023-09-15T13:00:00Z'
    },
    {
        id: 'TCK-1046',
        subject: 'Request for password reset',
        customer: 'Charlie Davis',
        status: 'resolved',
        priority: 'low',
        createdAt: '2023-09-15T14:00:00Z'
    }

];