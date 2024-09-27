import React from 'react';
import todoIcon from '../../assets/icons/progress/To-do.svg';
import inProgressIcon from '../../assets/icons/progress/in-progress.svg';
import backlogIcon from '../../assets/icons/progress/Backlog.svg';
import cancelledIcon from '../../assets/icons/progress/Cancelled.svg';
import doneIcon from '../../assets/icons/progress/Done.svg';
import './Status.css'

const Status = ({ status }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'In progress':
                return inProgressIcon;
            case 'Backlog':
                return backlogIcon;
            case 'Cancelled':
                return cancelledIcon;
            case 'Done':
                return doneIcon;
            default: // as Todo
                return todoIcon;
        }
    };

    return (
        <div className="status-container">
            <img
                src={getStatusIcon(status)}
                alt={status}
                className="status-icon"
            />
        </div>
    );
};

export default Status;
