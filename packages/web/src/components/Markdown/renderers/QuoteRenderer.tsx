import React from 'react';
import { Typography, createStyles, makeStyles } from '@material-ui/core';

interface QuoteRendererProps {
	children: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    quote: {
      color: "#BDB399",
      fontStyle: "italic",
      borderLeft: "#e2d7bb solid",
      paddingLeft: "40px",
      margin: "20px",
      marginLeft: "0px"
    }
  })
)

const QuoteRenderer = (props: QuoteRendererProps) => {
  const classes = useStyles();
	return <Typography gutterBottom  component="div" className={classes.quote}>{props.children}</Typography>;
};

export default QuoteRenderer;