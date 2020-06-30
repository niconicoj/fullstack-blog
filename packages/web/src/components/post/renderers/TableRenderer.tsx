import React from 'react';
import { Paper, Table, TableContainer } from '@material-ui/core';

interface TableChildren {
	columnAlignment: string[];
}

interface TableRendererProps {
	children: React.ReactElement<TableChildren>[];
	columnAlignment: string[];
}

const TableRenderer = (props: TableRendererProps) => {
	const childrenWithProps = React.Children.map(props.children, (child) => {
		return React.cloneElement(child, {
			columnAlignment: props.columnAlignment
		});
	});
	return (
		<TableContainer component={Paper}>
			<Table>{childrenWithProps}</Table>
		</TableContainer>
	);
};

export default TableRenderer;
