import React from "react";
import "./GroupHeader.css";
import PriorityIcon from "../Priority/Priority";
import Status from "../Status/Status";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import { ReactComponent as ThreeDotIcon } from '../../assets/icons/3 dot menu.svg';

const GroupHeader = ({IconComponent,headerText,elementsCount}) => {
	return (
		<div className="header-container">
            <div className = "header-details-container">
                {IconComponent && <IconComponent/>}
                <h1>{headerText}</h1>
                <h2>{elementsCount}</h2>
            </div>

            <div className="options">
                <AddIcon/>
                <ThreeDotIcon/>
            </div>
        </div>
	);
};

export default GroupHeader;