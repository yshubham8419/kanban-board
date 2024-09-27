import React from 'react';
import './Menu.css'
function Menu({grouping,ordering,setGrouping,setSortOrder,closeMenu}){
    const handleGroupingChange = (event) => {
        setGrouping(event.target.value);
        closeMenu();
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
        closeMenu();
    };

    return (
        <div className="menu-container">
            <div className='menu-item'>
                <span>grouping</span>
                <select value={grouping} onChange={handleGroupingChange} >
                    <option value = "priority">priority</option>
                    <option value = "status">status</option>
                    <option value = "user">user</option>
                </select>
            </div>
            <div className='menu-item'>
                <span>ordering</span>
                <select value = {ordering} onChange={handleSortOrderChange}>
                    <option value = "priority">priority</option>
                    <option value = "title">title</option>
                </select>
            </div>
        </div>
    )
}

export default Menu;