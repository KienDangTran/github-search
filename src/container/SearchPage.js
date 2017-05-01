import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import ResultList from '../component/ResultList';
import ResultDetail from '../component/ResultDetail';
import axios from 'axios';
import { Jumbotron, PageHeader, FormGroup, FormControl, Button, Alert, ControlLabel } from 'react-bootstrap';

class SearchPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			errors: '',
			inputValue: '',
			results: [],
			selectedResult: undefined,
			repos: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleGoBack = this.handleGoBack.bind(this);
	}

	handleDismissClick() {
		this.setState({ errors: '' })
	}

	renderErrorMessage() {
		return this.state.errors
			? (
				<Alert bsStyle="danger">
					{ this.state.errors }
				</Alert>
			)
			: undefined;

	};

	handleSelect(e) {
		e.preventDefault();
		if (e.value) {
			this.setState({
				selectedResult: e.value
			})
			if (e.value.repos_url) {
				axios.get(e.value.repos_url)
					.then(response => {
						this.setState({
							repos: response.data
						})
					})
					.catch(e => { throw e });
			}
		}
	}

	handleGoBack() {
		this.setState({
			selectedResult: undefined,
			repos: []
		})
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value || '',
			errors: '',
			results: [],
			selectedResult: undefined,
			repos: []
		});
	}

	validate() {
		if (!this.state.inputValue) {
			this.setState({
				errors: 'Search String can\'t be empty'
			})
			return false;
		}
		return true;
	}

	handleSubmit() {
		if (!this.validate()) return;
		axios.get(`https://api.github.com/search/users?q=${this.state.inputValue}`)
			.then(response => {
				if (response.status === 200 && response.data.items.length > 0) {
					this.setState({
						results: response.data.items
					});
				} else {
					this.setState({
						errors: `"${this.state.inputValue}" doesn't match any result.`
					});
				}
			})
			.catch(error => { throw error });
	}

	renderResult() {
		return this.state.results.length > 0
			? (<ResultList results={ this.state.results } onSelect={ this.handleSelect } />)
			: undefined;
	}

	renderResultDetail() {
		if (this.state.selectedResult !== undefined) {
			return (
				<ResultDetail
					result={ this.state.selectedResult }
					repos={ this.state.repos }
					goBack={ this.handleGoBack }
				/>
			);
		} else {
			this.setState({
				errors: 'Selected Result was empty'
			})
		}
	}

	render() {
		return (
			<div>
				<PageHeader>Search on Github</PageHeader>
				<Jumbotron>
					<FormGroup controlId="username">
						<ControlLabel htmlFor="username">Type a username and hit 'Search':</ControlLabel>
						<FormControl
							type="text"
							value={ this.state.inputValue }
							placeholder="Enter github username"
							onChange={ this.handleChange }
						/>
					</FormGroup>
					<Button
						id="submit"
						bsStyle="primary"
						className="pull-left"
						onClick={ this.handleSubmit }
					>
						Search
						</Button>
				</Jumbotron>
				<hr />
				{ this.renderErrorMessage() }
				{
					this.state.selectedResult !== undefined
						? this.renderResultDetail()
						: this.renderResult()
				}
			</div>
		);
	}
}

export default SearchPage;
