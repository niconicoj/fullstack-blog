import React from 'react';
import { TableRow } from '@material-ui/core';

interface TableChildren {
	align: string;
}

interface TRowRendererProps {
	children: React.ReactElement<TableChildren>[];
	columnAlignment: string[];
}

const TRowRenderer = (props: TRowRendererProps) => {
	const childrenWithProps = React.Children.map(props.children, (child, index) => {
		return React.cloneElement(child, {
			align: props.columnAlignment[index]
		});
	});
	return <TableRow>{childrenWithProps}</TableRow>;
};

export default TRowRenderer;