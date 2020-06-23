import React from 'react';
import { Typography } from '@material-ui/core';

interface BodyRendererProps {
	value: string;
}

const BodyRenderer = (props: BodyRendererProps) => {
	return <Typography variant="body1">{props.value}</Typography>;
};

export default BodyRenderer;
