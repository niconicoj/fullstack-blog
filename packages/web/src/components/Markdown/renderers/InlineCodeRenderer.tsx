import { makeStyles, createStyles } from '@material-ui/core';
import React from 'react';

interface InlineCodeRendererProps {
  value: string | undefined
}

const useStyles = makeStyles(() =>
	createStyles({
		inlineCode: {
			background: '#1d2021',
			padding: '2px',
			borderRadius: '4px',
			color: '#fabd2f'
		}
	})
);
const InlineCodeRenderer = (props: InlineCodeRendererProps) => {
	const classes = useStyles();
	return <code className={classes.inlineCode}>{props.value}</code>;
};

export default InlineCodeRenderer;
