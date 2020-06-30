import { Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

interface MonospaceProps {
  children: string,
  className?: string
}

const useStyles = makeStyles(() =>
	createStyles({
		monospace: {
      fontFamily: 'Fira Code',
      color: "#928374",
      lineHeight: 1
		}
	})
);

const Monospace = (props: MonospaceProps) => {
	const classes = useStyles();
	return <Typography className={classes.monospace+' '+props.className}>{props.children}</Typography>;
};

export default Monospace;