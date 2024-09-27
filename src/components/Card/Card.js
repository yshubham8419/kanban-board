import React from "react";
import "./Card.css";
import PriorityIcon from "../Priority/Priority";
import Status from "../Status/Status";
import UserAvatar from "../User/User";

const Card = ({ id, title, tags, userId, status, priority,groupBy}) => {
	return (
		<div className="card-container">
			<div className="card-header">
				<span className="card-id">{id}</span>
			</div>
			<div style = {{flex:1}}></div>
			<div className="card-body">

				{groupBy!="status" && (
					<Status status={status}></Status>
				)}

				<h2 className="card-title">{title}</h2>

			</div>
			<div style = {{flex:2}}></div>
			<div className="card-footer">
				{groupBy!="priority" && (
					<PriorityIcon priority={priority} />
				)}

				{tags.length>0 &&
					tags.map((tag, index) => (
						<div key={index} className="tag">
							<span className="icon grey-circle"></span>
							<span className="tag-text">{tag}</span>
						</div>
					))}
			</div>
		
			<div className="avatar-container">
					{groupBy!='user' && <UserAvatar userId={userId}/> }
			</div>
		</div>
	);
};

export default Card;
