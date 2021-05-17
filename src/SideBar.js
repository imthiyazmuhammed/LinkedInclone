import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function SideBar() {
	const user = useSelector(selectUser);
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span> <p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1621024994326-91782bb4a5ba?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
					alt=""
				/>
				<Avatar className="sidebar__avatar">{user?.displayName[0]}</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">3232</p>
				</div>
				<div className="sidebar__stat">
					<p>views on post</p>
					<p className="sidebar__statNumber">3453</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactJs')}
				{recentItem('devOps')}
				{recentItem('nodejs')}
				{recentItem('javscript')}
			</div>
		</div>
	);
}

export default SideBar;
