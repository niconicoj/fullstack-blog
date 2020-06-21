import React, { useReducer } from 'react';
import {
	ThemeProvider,
	createMuiTheme,
	CssBaseline
} from '@material-ui/core';
import { themeReducer } from './hooks/reducers/themeReducer';
import { themeContext } from './hooks/contexts/themeContext';
import TopBar from './components/TopBar/TopBar';

function App() {
	const [ state, dispatch ] = useReducer(themeReducer, { dark: true });

	const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Rubik"',
        '"Fira Code"'
      ].join(','),
    },
		palette: {
      type: state.dark ? 'dark' : 'light',
      background: {
        default: "#282828"
      }
    },
  });

	return (
		<themeContext.Provider value={{ dark: state.dark, dispatch: dispatch }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
        <TopBar/>
			</ThemeProvider>
		</themeContext.Provider>
	);
}

export default App;
