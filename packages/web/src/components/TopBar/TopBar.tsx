import React from 'react';
import { makeStyles, createStyles, Typography } from '@material-ui/core';
import VerticalDivider, { DividerType } from './VerticalDivider';

const useStyles = makeStyles(() =>
	createStyles({
		navBar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			width: '100%',
      background: '#5a524C',
      position: 'fixed'
		},
		lightBrown: {
			background: '#a89984',
			color: '#282828'
		},
		darkBrown: {
			background: '#5a524C',
			color: '#a89984'
		},
		el: {
			alignSelf: 'stretch',
			display: 'flex',
			alignItems: 'center',
			padding: '8px',
			'&:last-child': {
				paddingRight: '16px'
			}
		},
		title: {
			fontSize: '64px',
			fontWeight: 700,
			lineHeight: 0,
			fontFamily: 'Rubik'
		},
		domain: {
			fontSize: '48px',
			lineHeight: 0,
			fontFamily: 'Fira Code'
    },
    button: {
      fontSize: '36px',
      lineHeight: 0,
      fontFamily: 'Fira Code'
    },
		flex: {
			display: 'flex'
		}
	})
);

const TopBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.navBar}>
			<div className={classes.flex}>
				<img alt="" src="/assets/decoration/logoIcon.png" />
				<VerticalDivider type={DividerType.light2Light} />
				<Typography className={classes.el + ' ' + classes.lightBrown + ' ' + classes.title}>BLOG</Typography>
				<VerticalDivider type={DividerType.light2Dark} />
				<Typography className={classes.el + ' ' + classes.darkBrown + ' ' + classes.domain}>
					niconico.io
				</Typography>
				<VerticalDivider type={DividerType.dark2Dark} />
			</div>
			<div className={classes.flex}>
				<VerticalDivider type={DividerType.dark2Light} />
				<Typography className={classes.el + ' ' + classes.lightBrown + ' ' + classes.button}>Login</Typography>
				<VerticalDivider type={DividerType.light2Light} />
				<Typography className={classes.el + ' ' + classes.lightBrown + ' ' + classes.button}>
					Sign up
				</Typography>
			</div>
		</div>
	);
};

export default TopBar;
