import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import Post from '../components/post/Post';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			paddingTop: '96px'
		}
	})
);

const PostPage = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<Grid item sm={3} />
			<Grid item sm={6}>
				<Post postId="8e2ee4a5-7b76-4c11-81cb-e9464cc21200" />
			</Grid>
			<Grid item sm={3} />
		</Grid>
	);
};

export default PostPage;
