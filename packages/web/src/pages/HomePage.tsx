import React, { useState } from 'react';
import { usePostsQuery } from '../generated/graphql';
import PostHead from '../components/post/PostHead';
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import moment from 'moment';

const HomePage = () => {
  const [ page, setPage ] = useState(1);
  const {loading, error, data } = usePostsQuery({variables: {page: page}});

  const handlePage = (_: any, value: number) => {
    setPage(value);
  }

  let posts: JSX.Element | JSX.Element[] | undefined;
  if(loading) {
    posts = <Typography>loading</Typography>
  } else if (error) {
    posts = <Typography>{error.message}</Typography>
  } else {
    posts = data?.posts?.posts!.map(post => {
      return <PostHead title={post.title.text} createdAt={moment(post.createdAt)} postId={post.id} key={post.id}></PostHead>
    })
  }

  return (
    <div>
      <Typography>Title</Typography>
      {posts}
      <Pagination count={data ? data.posts!.pageCount: 0} page={page} onChange={handlePage}/>
    </div>
  )
}

export default HomePage;