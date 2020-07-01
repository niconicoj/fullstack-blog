import React from 'react';
import { Grid, makeStyles, createStyles, Typography } from '@material-ui/core';
import Post from '../components/post/Post';
import { usePostsQuery } from '../generated/graphql';
import PostHead from '../components/post/PostHead';
import moment from 'moment';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			paddingTop: '96px'
    },
    sidecontent: {
      direction: "rtl",
      paddingRight: "40px"
    },
    sideTitle: {
      fontSize: '32px',
      color: '#e2d7bb',
      fontFamily: 'Rubik',
      fontWeight: 700,
      marginBottom: "16px"
    },
    
	})
);

const PostPage = () => {
  const {data, error, loading } = usePostsQuery({variables: {page: 1}});
  const classes = useStyles();
  
  let sideContent: JSX.Element | JSX.Element[] | undefined;
  if(loading) {
    sideContent = <Typography>loading</Typography>
  } else if (error) {
    sideContent = <Typography>{error.message}</Typography>
  } else {
    sideContent = data?.posts?.posts!.map(post => {
      return <PostHead title={post.title.text} createdAt={moment(post.createdAt)} key={post.id}></PostHead>
    })
  }

 	return (
		<Grid container className={classes.root}>
			<Grid item sm={2} />
			<Grid item sm={7}>
				<Post postId="8e2ee4a5-7b76-4c11-81cb-e9464cc21200" />
			</Grid>
			<Grid item sm={3} className={classes.sidecontent}>
        <Typography className={classes.sideTitle}>Other Posts</Typography>
        {sideContent}
      </Grid>
		</Grid>
	);
};

export default PostPage;
