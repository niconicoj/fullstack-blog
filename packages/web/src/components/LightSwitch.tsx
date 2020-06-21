import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { themeContext } from '../hooks/contexts/themeContext';
import { ThemeActionType } from '../hooks/reducers/themeReducer';

const LightSwitch = () => {
  const {dark, dispatch} = useContext(themeContext);
	return (
    <Switch
      checked={dark}
      onChange={() => dispatch({type: ThemeActionType.switch})}
    ></Switch>
		
	);
};

export default LightSwitch;
