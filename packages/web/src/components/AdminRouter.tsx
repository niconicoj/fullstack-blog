import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import AdminDrawer from './AdminDrawer';
import AdminPage from '../pages/AdminPage';

const AdminRouter = () => {
	const { path } = useRouteMatch();

	return (
    <>
      <AdminDrawer />
			<Switch>
				<Route exact path={path}>
					<AdminPage />
				</Route>
			</Switch>
    </>
	);
};

export default AdminRouter;