import React from 'react';
import { mount } from 'enzyme';
import SearchPage from '../SearchPage';

describe('SearchPage', () => {
	const searchPage = mount(<SearchPage />);
	
	it('Render PageHeader', () => {
		expect(searchPage.find('PageHeader').length).toEqual(1);
	});
	
	it('Render Jumbotron', () => {
		expect(searchPage.find('Jumbotron').length).toEqual(1);
	});
	
	it('Render FormGroup', () => {
		const jumbotron = searchPage.find('Jumbotron');
		expect(searchPage.find('FormGroup').length).toEqual(1);
		expect(searchPage.find('Button').length).toEqual(1);
	});
	
	it('Render fields', () => {
		const form = searchPage.find('Jumbotron').find('FormGroup');
		expect(searchPage.find('ControlLabel').length).toEqual(1);
		expect(searchPage.find('FormControl').length).toEqual(1);
	});
});
