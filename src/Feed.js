import CreateIcon from '@material-ui/icons/Create';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
	const user = useSelector(selectUser);
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');
	useEffect(() => {
		db.collection('posts')
			.orderBy('timeStamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);
	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: user?.displayName,
			description: user?.email,
			message: input,
			photUrl: user?.photUrl || '',
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
					<InputOptions
						Icon={SubscriptionsIcon}
						title="Video"
						color="#e7a33e"
					/>
					<InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
				</div>
			</div>
			<FlipMove>
				{posts.map(({ id, data: { name, description, photoUrl, message } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
