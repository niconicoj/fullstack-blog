import React from 'react';
import { TableHead, createStyles, makeStyles } from '@material-ui/core';

interface TableChildren {
	columnAlignment: string[];
}

interface THeaderRendererProps {
	children: React.ReactElement<TableChildren>;
	columnAlignment: string[];
}

const useStyles = makeStyles(() =>
	createStyles({
    tableHead: {
      background: "#1d2021",
    }
	})
);

const THeaderRenderer = (props: THeaderRendererProps) => {
  const classes = useStyles();

	const childrenWithProps = React.Children.map(props.children, (child) => {
		return React.cloneElement(child, {
			columnAlignment: props.columnAlignment
		});
	});
	return <TableHead className={classes.tableHead}>{childrenWithProps}</TableHead>;
};

export default THeaderRenderer;