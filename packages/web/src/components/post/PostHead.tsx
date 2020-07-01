import { Moment } from 'moment';
import { Typography, makeStyles, createStyles } from '@material-ui/core';
import React from 'react';

interface PostHeadProps {
	createdAt: Moment;
	title?: string | null;
}

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      marginBottom: "8px"
    },
    sideContentTitle: {
      fontSize: "24px",
      fontWeight: 500,
      color: "#e2d7bb" 
    },
    sideContentDate: {
      color: "#928374",
      fontFamily: "Fira Code",
      fontSize: "14px",
      lineHeight: 1
    }
  })
)

const PostHead = (props: PostHeadProps) => {
  const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography className={classes.sideContentTitle}>{props.title}</Typography>
			<Typography className={classes.sideContentDate}>{props.createdAt.format('dddd, MMMM Do YYYY')}</Typography>
		</div>
	);
};

export default PostHead;