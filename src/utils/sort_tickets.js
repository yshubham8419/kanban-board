const sortTickets = (group,sortOrder) => {
    return group.sort((a, b) => {
        if (sortOrder === 'priority') {
            return b.priority - a.priority;
        }
        if (sortOrder === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
};

export default sortTickets;