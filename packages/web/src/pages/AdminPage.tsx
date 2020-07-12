import React, { useState } from 'react';
import { Grid, makeStyles, createStyles, TextField, AppBar, Toolbar, Button } from '@material-ui/core';
import Markdown from '../components/Markdown/Mardown';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			padding: '40px',
			paddingLeft: '280px',
			paddingTop: '96px',
			color: '#e2d7bb'
    },
    mdRender: {
      overflow: "auto",
      overflowWrap: "anywhere",
      maxHeight: "786px"
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    }
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
					<TextField rows={39} value={text} onChange={handleChange} variant="filled" multiline fullWidth />
				</Grid>
				<Grid item xs={6} className={classes.mdRender}>
					<Markdown source={text} />
				</Grid>
			</Grid>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Button variant="contained" color="secondary">
            Save
          </Button>
        </Toolbar>
      </AppBar>
		</div>
	);
};

export default AdminPage;
