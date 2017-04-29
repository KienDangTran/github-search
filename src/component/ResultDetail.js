import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, ControlLabel, Image, Table, Button, Glyphicon } from 'react-bootstrap';

function ResultDetails({ result, repos, goBack }) {
	return (
		<div>
			<Button onClick={goBack}>
				<Glyphicon glyph="chevron-left"/>
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
							<Col componentClass={ ControlLabel } sm={ 2 }>Id</Col>
							<Col sm={ 10 }>{ result.id }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Username</Col>
							<Col sm={ 10 }>{ result.login }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Type</Col>
							<Col sm={ 10 }>{ result.type }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Score</Col>
							<Col sm={ 10 }>{ result.score }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Site admin</Col>
							<Col sm={ 10 }>{ result.site_admin ? 'Yes' : 'No' }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>URL</Col>
							<Col sm={ 10 }>{ result.url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Avatar URL</Col>
							<Col sm={ 10 }>{ result.avatar_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Events URL</Col>
							<Col sm={ 10 }>{ result.events_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Followers URL</Col>
							<Col sm={ 10 }>{ result.followers_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Following URL</Col>
							<Col sm={ 10 }>{ result.following_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Gists URL</Col>
							<Col sm={ 10 }>{ result.gists_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>HTML URL</Col>
							<Col sm={ 10 }>{ result.html_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Organizations URL</Col>
							<Col sm={ 10 }>{ result.organizations_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Received Events URL</Col>
							<Col sm={ 10 }>{ result.received_events_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Gravatar ID</Col>
							<Col sm={ 10 }>{ result.gravatar_id }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Repos URL</Col>
							<Col sm={ 10 }>{ result.repos_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Starred URL</Col>
							<Col sm={ 10 }>{ result.starred_url }</Col>
						</Row>
						<Row>
							<Col componentClass={ ControlLabel } sm={ 2 }>Subscriptions URL</Col>
							<Col sm={ 10 }>{ result.subscriptions_url }</Col>
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
