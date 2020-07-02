import React from 'react';
import { Grid, makeStyles, createStyles, Typography } from '@material-ui/core';
import Post from '../components/post/Post';
import { usePostsQuery } from '../generated/graphql';
import PostHead from '../components/post/PostHead';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
      padding: "40px",
      paddingTop: '96px'
    },
    sidecontent: {
      direction: "rtl",
      paddingLeft: "16px"
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
  const { postId } = useParams();
  
  let sideContent: JSX.Element | JSX.Element[] | undefined;
  if(loading) {
    sideContent = <Typography>loading</Typography>
  } else if (error) {
    sideContent = <Typography>{error.message}</Typography>
  } else {
    sideContent = data?.posts?.posts!.map(post => {
      return <PostHead title={post.title.text} createdAt={moment(post.createdAt)} postId={post.id} key={post.id}></PostHead>
    })
  }

 	return (
		<Grid container className={classes.root}>
			<Grid item lg={10} sm={9}>
				<Post postId={postId} />
			</Grid>
			<Grid item lg={2} sm={3} className={classes.sidecontent}>
        <Typography className={classes.sideTitle}>Other Posts</Typography>
        {sideContent}
      </Grid>
		</Grid>
	);
};

export default PostPage;
