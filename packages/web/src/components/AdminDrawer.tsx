import React, { useState } from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	createStyles,
	Divider,
  Collapse,
  Theme,
  Typography,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SubjectIcon from '@material-ui/icons/Subject';
import DescriptionIcon from '@material-ui/icons/Description';
import Pagination from '@material-ui/lab/Pagination';
import { usePostsQuery } from '../generated/graphql';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: '240px'
		},
		drawerPaper: {
			paddingTop: '80px',
			width: '240px',
			zIndex: 'auto'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
	})
);

const AdminDrawer = () => {
  const classes = useStyles();
  const [ page, setPage ] = useState(1);
  const {data, loading, error} = usePostsQuery({variables: {page: page}});
  const [openContentTray, setOpenContentTray] = React.useState(false);
  const [openPostTray, setOpenPostTray] = React.useState(false);
  const handlePage = (_: any, value: number) => {
    setPage(value);
  }

  const handleContentClick = () => {
    setOpenContentTray(!openContentTray);
  };
  const handlePostClick = () => {
    setOpenPostTray(!openPostTray);
  };

  let posts: JSX.Element | JSX.Element[] | undefined;
  if(loading) {
    posts = <Typography>loading</Typography>;
  } else if (error) {
    posts = <Typography>{error.message}</Typography>;
  } else {
    posts = data?.posts?.posts!.map(post => {
      return <ListItem button className={classes.nested}>
							<ListItemAvatar>
                <Avatar alt="B" src="/assets/decoration/logoIcon.png" />
							</ListItemAvatar>
							<ListItemText primary={post.title.text} secondary={moment(post.createdAt).format('dddd, MMMM Do YYYY')} />
						</ListItem>
    })
  }

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<List>
				<ListItem button onClick={(e) => console.log(e.target)}>
					<ListItemIcon>
						<PostAddIcon />
					</ListItemIcon>
					<ListItemText primary="New post" />
				</ListItem>
				<Divider />
				<ListItem button onClick={handleContentClick}>
					<ListItemIcon>
						<TranslateIcon />
					</ListItemIcon>
					<ListItemText primary="Content" />
					{openContentTray ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openContentTray} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
                <SubjectIcon />
							</ListItemIcon>
							<ListItemText primary="Starred" />
						</ListItem>
					</List>
				</Collapse>
        <Divider />
        <ListItem button onClick={handlePostClick}>
					<ListItemIcon>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText primary="Posts" />
					{openPostTray ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openPostTray} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
            {posts}
					</List>
          <Pagination count={data ? data.posts!.pageCount: 0} page={page} onChange={handlePage}/>
				</Collapse>
			</List>
		</Drawer>
	);
};

export default AdminDrawer;
