const statuses = ['Todo', 'In progress', 'Backlog', 'Done', 'Cancelled'];
const priorities = [4, 3, 2, 1, 0]; // Urgent, High, Medium, Low, No priority

const groupTickets = (groupBy, tickets) => {
    let grouped = {};

    if (groupBy === 'status') {
        grouped = {};
        statuses.forEach(status => {
            grouped[status] = [];
        });

        tickets.forEach(ticket => {
            if (!grouped[ticket.status]) {
                grouped[ticket.status] = [];
            }
            grouped[ticket.status].push(ticket);
        });

    } else if (groupBy === 'user') {
        grouped = {};
        tickets.forEach(ticket => {
            if (!grouped[ticket.userId]) {
                grouped[ticket.userId] = [];
            }
            grouped[ticket.userId].push(ticket);
        });

    } else if (groupBy === 'priority') {
        grouped = {};
        priorities.forEach(priority => {
            grouped[priority] = [];
        });

        tickets.forEach(ticket => {
            if (!grouped[ticket.priority]) {
                grouped[ticket.priority] = [];
            }
            grouped[ticket.priority].push(ticket);
        });
    }

    return grouped;
};

export default groupTickets;
