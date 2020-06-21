import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export enum DividerType {
  dark2Light = 'D2LSeparator.svg',
  dark2Dark = 'D2DSeparator.svg',
  light2Dark = 'L2DSeparator.svg',
  light2Light = 'L2LSeparator.svg'
}

type VerticalDividerProps = {
	type: DividerType;
};

const useStyles = makeStyles(() =>
	createStyles({
    divider: {
      color: "#282828",
      height: "80px"
    }
	})
);

const VerticalDivider = (props: VerticalDividerProps) => {
  const classes = useStyles();

	return <img alt="" src={`/assets/decoration/${props.type}`} className={classes.divider}></img>;
};

export default VerticalDivider;
