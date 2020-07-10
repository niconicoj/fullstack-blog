import { usePostQuery } from '../../generated/graphql';
import React from 'react';
import moment from 'moment';
import { Typography, makeStyles, createStyles } from '@material-ui/core';
import Monospace from '../Monospace';
import Markdown from '../Markdown/Mardown';

interface PostProps {
  postId: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "#e2d7bb"
    },
    timestamp: {
      marginBottom: "16px"
    }
  })
)

const Post = (props : PostProps) => {
  const { data, error, loading } = usePostQuery({ variables: { id: props.postId } });
  const classes = useStyles();
  
  if(loading) return (
    <div>loading</div>
  );
  if(error) return (
    <div>Error : {error.message}</div>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1">  
        {data?.post?.title.text}
      </Typography>
      <Monospace className={classes.timestamp}>
        {"// "+moment(data?.post?.createdAt).format("dddd, MMMM Do YYYY")}
      </Monospace>
      <div>
        <Markdown 
          source={(data!.post!.body.text as string)}
        />
      </div>
    </div>
  );
};

export default Post;
