import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';

interface InlineCodeRendererProps {
  value: string
}

const useStyles = makeStyles(() =>
	createStyles({
		inlineCode: {
			background: '#1d2021',
			padding: '2px',
			borderRadius: '4px',
			color: '#E78A4E'
		}
	})
);
const InlineCodeRenderer = (props: InlineCodeRendererProps) => {
	const classes = useStyles();
	return <code className={classes.inlineCode}>{props.value}</code>;
};

export default InlineCodeRenderer;
