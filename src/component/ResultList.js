import React, { Component, PropTypes } from 'react';
import { Table, Image, Label } from 'react-bootstrap';

function ResultList({ results, onSelect }) {
	return (
		<div>
			<h4><Label bsStyle="success">{ results.length } result(s) was found!</Label></h4>
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
									<td><a href="#" onClick={ e => { e.value = result; onSelect(e) } }>{ result.login }</a></td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		</div >
	);
}

ResultList.propTypes = {
	results: PropTypes.array.isRequired,
	onSelect: PropTypes.func
};

ResultList.defaultProps = {
	results: []
};

export default ResultList;
