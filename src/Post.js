import { Avatar } from '@material-ui/core';
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import React, { forwardRef } from 'react';
import './post.css';
import InputOptions from './InputOptions';

const Post = forwardRef(({ name, description, message, photoUrl },ref) => {
	return (
		<div ref={ref} className="post">
			<div className="post__header">
				<Avatar src={photoUrl}>
					{name[0]}
					{name[1]}
				</Avatar>
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className="post__body">
				<p>{message}</p>
			</div>
			<div className="post__button">
				<InputOptions Icon={ThumbUpAltOutlined} title="Like" color="grey" />
				<InputOptions Icon={ChatOutlined} title="Comment" color="grey" />
				<InputOptions Icon={ShareOutlined} title="Share" color="grey" />
				<InputOptions Icon={SendOutlined} title="Send" color="grey" />
			</div>
		</div>
	);
});

export default Post;
