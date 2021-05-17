import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './Firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const register = () => {
		if (!name) {
			return alert('please enter a full name !');
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};
	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.name,
						photoUrl: userAuth.user.photoUrl,
					})
				);
			})
			.catch((error) => alert(error));
	};
	return (
		<div className="login">
			<img
				src="https://image.flaticon.com/icons/png/128/1409/1409945.png"
				alt=""
			/>
			<form onSubmit={loginToApp}>
				<input
					placeholder="full name(required)"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					placeholder="profile pic url"
					type="text"
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
				/>
				<input
					placeholder="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					placeholder="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">sign-in</button>
			</form>
			<p>
				Not a Memeber ?{' '}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
