import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Grid, Row, Col, ControlLabel, Image, Table, Button, Glyphicon } from 'react-bootstrap';

function ResultDetails({ result, repos, goBack }) {
	return (
		<div>
			<Button onClick={ goBack }>
				<Glyphicon glyph="chevron-left" />
				Back to list
			</Button>
			<Grid>
				<h3>User Details</h3>
				<Row>
					<Col sm={ 4 }>
						<Image src={ result.avatar_url } responsive rounded thumbnail />
					</Col>
					<Col sm={ 8 }>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Id</Col>
							<Col sm={ 9 }>{ result.id }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Username</Col>
							<Col sm={ 9 }>{ result.login }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Type</Col>
							<Col sm={ 9 }>{ result.type }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Score</Col>
							<Col sm={ 9 }>{ result.score }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Site admin</Col>
							<Col sm={ 9 }>{ result.site_admin ? 'Yes' : 'No' }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>URL</Col>
							<Col sm={ 9 }>{ result.url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Avatar URL</Col>
							<Col sm={ 9 }>{ result.avatar_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Events URL</Col>
							<Col sm={ 9 }>{ result.events_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Followers URL</Col>
							<Col sm={ 9 }>{ result.followers_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Following URL</Col>
							<Col sm={ 9 }>{ result.following_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Gists URL</Col>
							<Col sm={ 9 }>{ result.gists_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>HTML URL</Col>
							<Col sm={ 9 }>{ result.html_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Organizations URL</Col>
							<Col sm={ 9 }>{ result.organizations_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Received Events URL</Col>
							<Col sm={ 9 }>{ result.received_events_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Gravatar ID</Col>
							<Col sm={ 9 }>{ result.gravatar_id }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Repos URL</Col>
							<Col sm={ 9 }>{ result.repos_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Starred URL</Col>
							<Col sm={ 9 }>{ result.starred_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 3 }>Subscriptions URL</Col>
							<Col sm={ 9 }>{ result.subscriptions_url }</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
			<hr />
			{ repos !== undefined && repos.length > 0
				? <div>
					<h3>Repositories</h3>
					<Table responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>id</th>
								<th>name</th>
								<th>private</th>
								<th>description</th>
								<th>url</th>
								<th>language</th>
								<th>stargazers_count</th>
								<th>watchers_count</th>
							</tr>
						</thead>
						<tbody>
							{
								repos.map((repo, index) => {
									return (
										<tr key={ index }>
											<td>{ index + 1 }</td>
											<td>{ repo.id }</td>
											<td>{ repo.name }</td>
											<td>{ repo.private ? 'Yes' : 'No' }</td>
											<td>{ repo.description }</td>
											<td>{ repo.url }</td>
											<td>{ repo.language }</td>
											<td>{ repo.stargazers_count }</td>
											<td>{ repo.watchers_count }</td>
										</tr>
									)
								})
							}
						</tbody>
					</Table>
				</div>
				: undefined
			}
		</div>
	);
}

ResultDetails.propTypes = {
	result: PropTypes.object.isRequired,
	repos: PropTypes.array,
	goBack: PropTypes.func
};

export default ResultDetails;
