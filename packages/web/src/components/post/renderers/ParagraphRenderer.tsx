import React from 'react';
import { Typography } from '@material-ui/core';

interface ParagraphRendererProps {
	children: string;
}

const ParagraphRenderer = (props: ParagraphRendererProps) => {
	return <Typography gutterBottom >{props.children}</Typography>;
};

export default ParagraphRenderer;
