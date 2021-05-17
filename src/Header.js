import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const logOutOfApp = () => {
		dispatch(logout());
		auth.signOut();
		console.log(logout());
	};
	return (
		<div className="Header">
			<div className="header__left">
				<img src="https://image.flaticon.com/icons/png/128/174/174857.png" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My network" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption avatar={true} title="me" onClick={logOutOfApp} />
			</div>
		</div>
	);
}

export default Header;
