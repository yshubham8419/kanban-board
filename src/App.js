import './App.css';
import Card from './components/Card/Card';
import GroupHeader from './components/GroupHeader/GroupHeader';
import UserAvatar from './components/User/User';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import groupTickets from './utils/group_tickets'
import sortTickets from './utils/sort_tickets'
import Status from './components/Status/Status';
import PriorityIcon from './components/Priority/Priority';
import Menu from './components/Menu/Menu'
import storage from './utils/storage';

const getPriorityLabel = (priority) => {
	switch (priority) {
		case 4:
			return "Urgent";
		case 3:
			return "High";
		case 2:
			return "Medium";
		case 1:
			return "Low";
		default:
			return "No Priority";
	}
};

function App() {
	const [tickets, setTickets] = useState([]);
	const [grouping, setGrouping] = useState('status');
	const [sortOrder, setSortOrder] = useState('priority');
	const [showMenu,setShowMenu]  = useState(false)

	useEffect(() => {
		axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
			.then(response => setTickets(response.data.tickets))
			.catch(error => console.error('Error fetching data:', error));
		const state = storage.loadState()
		if(state.grouping !== grouping || state.ordering !== sortOrder){
			setGrouping(state.grouping)
			setSortOrder(state.ordering)
		}
	}, []);

	useEffect(()=>{
		if(grouping!='status' || sortOrder!='priority')
			storage.saveState(grouping,sortOrder)
	},[grouping,sortOrder])

	const groupedTickets = groupTickets(grouping, tickets)
	return (
		<div className='App'>
			<NavBar toggleMenu = {()=>setShowMenu(!showMenu)} />

			{showMenu && <div style={{position:'absolute',left:'18px',top:'50px'}}>
				<Menu 
				grouping={grouping}
				ordering={sortOrder}
				setGrouping = {setGrouping}
				setSortOrder = {setSortOrder}
				closeMenu={()=>{setShowMenu(false)}}/>
			</div>
			}	
			
			<div className="page">
				<div className="row">
					{Object.keys(groupedTickets).map((groupKey) => (
						<div className="column">
							<GroupHeader
								IconComponent={
									() => grouping === 'status' ?
										<Status status={groupKey} />
										: (grouping === 'priority' ?
											<PriorityIcon priority={Number(groupKey)} /> :
											<UserAvatar />)
								}
								headerText={grouping === 'priority' ? getPriorityLabel(Number(groupKey)) : groupKey}
								elementsCount={groupedTickets[groupKey].length}
							/>
							{
								sortTickets(groupedTickets[groupKey], sortOrder).map((ticket) => (
									<Card
										id={ticket.id}
										title={ticket.title}
										tags={ticket.tag}
										userId={3}
										status={ticket.status}
										priority={ticket.priority}
										groupBy={grouping}
									/>
								))
							}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;