import React, { useReducer } from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { themeReducer } from './hooks/reducers/themeReducer';
import { themeContext } from './hooks/contexts/themeContext';
import TopBar from './components/TopBar/TopBar';
import PostPage from './pages/PostPage';

function App() {
	const [ state, dispatch ] = useReducer(themeReducer, { dark: true });

	const theme = createMuiTheme({
		typography: {
			fontFamily: [ '"Rubik"', '"Fira Sans"', '"Fira Code"', '"Roboto Mono"', '"Satisfy"' ].join(','),
			h1: {
				color: '#e2d7bb',
				fontSize: '48px',
				fontWeight: 700
			},
			body1: {
				color: 'inherit',
				fontSize: '16px',
				fontFamily: 'Fira Sans'
			}
		},
		palette: {
			type: state.dark ? 'dark' : 'light',
			background: {
				default: '#282828'
			}
		}
	});

	return (
		<themeContext.Provider value={{ dark: state.dark, dispatch: dispatch }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<TopBar />
					<Switch>
						<Route path="/:postId" children={<PostPage />} />
					</Switch>
				</Router>
			</ThemeProvider>
		</themeContext.Provider>
	);
}

export default App;
