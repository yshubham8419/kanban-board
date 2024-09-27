import React from 'react';
import './Priority.css';
import { ReactComponent as UrgentIcon } from '../../assets/icons/priority/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighIcon } from '../../assets/icons/priority/Img - High Priority.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/priority/Img - Medium Priority.svg';
import { ReactComponent as LowIcon } from '../../assets/icons/priority/Img - Low Priority.svg';
import { ReactComponent as NoPriorityIcon } from '../../assets/icons/priority/No-priority.svg';

const GetPriorityIcon = ({priority}) => {
	switch (priority) {
		case 4:
			return <UrgentIcon />;
		case 3:
			return <HighIcon />;
		case 2:
			return <MediumIcon />;
		case 1:
			return <LowIcon />;
		default:
			return <NoPriorityIcon />;
	}
};



const PriorityIcon = ({ priority }) => {
	return (
		<div className="priority-icon-container">
			<div className="priority-icon">
				<GetPriorityIcon priority={priority}/>
			</div>
		</div>
	);
};

export default PriorityIcon;
