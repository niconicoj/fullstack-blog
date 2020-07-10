import React, { useState } from 'react';
import { usePostsQuery, useContentQuery } from '../generated/graphql';
import PostHead from '../components/post/PostHead';
import { Typography, makeStyles, createStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import moment from 'moment';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "80px",
      paddingTop: "96px",
      color: '#e2d7bb'
    },
    intro: {
      marginBottom: "24px"
    }
  })
)

const HomePage = () => {
  const classes =useStyles();
  const [ page, setPage ] = useState(1);
  const {loading: loadingPosts, error: errorPosts, data: dataPosts } = usePostsQuery({variables: {page: page}});
  const {loading: loadingIntro, error: errorIntro, data: dataIntro } = useContentQuery({variables: {label: 'introduction'}});

  const handlePage = (_: any, value: number) => {
    setPage(value);
  }

  let posts: JSX.Element | JSX.Element[] | undefined;
  if(loadingPosts) {
    posts = <Typography>loading</Typography>
  } else if (errorPosts) {
    posts = <Typography>{errorPosts.message}</Typography>
  } else {
    posts = dataPosts?.posts?.posts!.map(post => {
      return <PostHead title={post.title.text} createdAt={moment(post.createdAt)} postId={post.id} key={post.id}></PostHead>
    })
  }
  
  let intro: string | undefined | null;
  if(loadingIntro) {
    intro = 'loading';
  } else if (errorIntro) {
    intro = `error ${errorIntro.message}`
  } else {
    intro = dataIntro!.content?.text;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="p" className={classes.intro}>{intro}</Typography>
      {posts}
      <Pagination count={dataPosts ? dataPosts.posts!.pageCount: 0} page={page} onChange={handlePage}/>
    </div>
  )
}

export default HomePage;