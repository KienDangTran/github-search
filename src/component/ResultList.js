import React, { Component, PropTypes } from 'react';
import { Table, Image } from 'react-bootstrap';

function ResultList({ results, handleSelect }) {
	return (
		<Table responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Avartar</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				{
					results.map((result, index) => {
						return (
							<tr key={ index }>
								<td>{ index + 1 }</td>
								<td><Image src={ result.avatar_url } responsive rounded thumbnail /></td>
								<td><a href="#" onClick={ handleSelect }>{ result.login }</a></td>
							</tr>
						)
					})
				}
			</tbody>
		</Table>
	);
}

ResultList.propTypes = {
	results: PropTypes.array.isRequired,
	handleSelect: PropTypes.func
};

ResultList.defaultProps = {
	results: []
};

export default ResultList;
