import React, { useState } from 'react';
import { Grid, makeStyles, createStyles, TextField } from '@material-ui/core';
import Markdown from '../components/Markdown/Mardown';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: '40px',
			paddingTop: '96px',
			color: '#e2d7bb'
		},
	})
);

const AdminPage = () => {
	const classes = useStyles();
	const [ text, changeText ] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		changeText(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={2}>
				<Grid item xs={6}>
					<TextField value={text} onChange={handleChange} variant="filled" multiline fullWidth />
				</Grid>
				<Grid item xs={6}>
					<Markdown source={text} />
				</Grid>
			</Grid>
		</div>
	);
};

export default AdminPage;
