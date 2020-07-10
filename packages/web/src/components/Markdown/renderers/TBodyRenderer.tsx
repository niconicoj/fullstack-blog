import React from 'react';
import { TableBody, createStyles, makeStyles } from '@material-ui/core';

interface TableChildren {
	columnAlignment: string[];
}

interface TBodyRendererProps {
	children: React.ReactElement<TableChildren>[];
	columnAlignment: string[];
}

const useStyles = makeStyles(() =>
	createStyles({
    tableBody: {
      background: "#323232",
    }
	})
);

const TBodyRenderer = (props: TBodyRendererProps) => {
  const classes = useStyles();
	const childrenWithProps = React.Children.map(props.children, (child) => {
		return React.cloneElement(child, {
			columnAlignment: props.columnAlignment
		});
	});
	return <TableBody className={classes.tableBody}>{childrenWithProps}</TableBody>;
};

export default TBodyRenderer;