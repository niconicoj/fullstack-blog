import React from 'react';
import { TableCell, createStyles, makeStyles } from '@material-ui/core';

interface TCellRendererProps {
	children: React.ReactElement;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  isHeader: boolean
}

const useStyles = makeStyles(() =>
	createStyles({
    tableCell: {
      color: "#e2d7bb",
    }
	})
);

const TCellRenderer = (props: TCellRendererProps) => {
  const classes = useStyles();
	return <TableCell align={props.align ?? "left"} className={classes.tableCell}>{props.children}</TableCell>;
};

export default TCellRenderer;