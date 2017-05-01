import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('App', () => {
	const app = mount(<App />);
	it('Wrap content in a Grid component', () => {
		expect(app.find('Grid').length).toEqual(1);
	});

	it('Render SearchPage', () => {
		const grid = app.find('Grid');
		if (grid !== undefined) {
			expect(grid.find('SearchPage').length).toEqual(1)
		}
	});
});
