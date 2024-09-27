const storage = {
    saveState: (grouping, ordering) => {
        try {
            const preferences = { grouping, ordering };
            const serializedPref = JSON.stringify(preferences);
            localStorage.setItem('preferences', serializedPref);
        } catch (error) {
        }
    },
    loadState: () => {
        try {
            const serializedPref = localStorage.getItem('preferences');
            if (serializedPref === null) {
                return { grouping: 'status', ordering: 'priority' }; 
            }
            return JSON.parse(serializedPref);
        } catch (error) {
            return { grouping: 'status', ordering: 'priority' }; 
        }
    }
};

export default storage;
