import React from 'react';
import { Grid } from '@material-ui/core';
import Post from '../components/post/Post';

const PostPage = () => {
	return (
		<Grid container>
			<Grid item sm={3} />
			<Grid item sm={6}>
				<Post />
			</Grid>
			<Grid item sm={3} />
		</Grid>
	);
};

export default PostPage;
