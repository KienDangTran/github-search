import React from 'react';
import { mount } from 'enzyme';
import ResultList from '../ResultList';

describe('ResultList', () => {
	let resultList;
	beforeEach(() => {
		const results = [{
			'login': 'KienDangTran',
			'id': 14361196, 'avatar_url': 'https://avatars1.githubusercontent.com/u/14361196?v=3',
			'gravatar_id': '', 'url': 'https://api.github.com/users/KienDangTran',
			'html_url': 'https://github.com/KienDangTran',
			'followers_url': 'https://api.github.com/users/KienDangTran/followers',
			'following_url': 'https://api.github.com/users/KienDangTran/following{/other_user}',
			'gists_url': 'https://api.github.com/users/KienDangTran/gists{/gist_id}',
			'starred_url': 'https://api.github.com/users/KienDangTran/starred{/owner}{/repo}',
			'subscriptions_url': 'https://api.github.com/users/KienDangTran/subscriptions',
			'organizations_url': 'https://api.github.com/users/KienDangTran/orgs',
			'repos_url': 'https://api.github.com/users/KienDangTran/repos',
			'events_url': 'https://api.github.com/users/KienDangTran/events{/privacy}',
			'received_events_url': 'https://api.github.com/users/KienDangTran/received_events',
			'type': 'User',
			'site_admin': false,
			'score': 28.137772
		}]
		resultList = mount(<ResultList results={ results } />);
	});

	it('Render result summary', () => {
		expect(resultList.find('Label').length).toEqual(1);
	});

	it('Render result list', () => {
		expect(resultList.find('Table').length).toEqual(1);
		expect(resultList.find('Table').find('tbody').find('tr').length).toEqual(1);
		expect(resultList.find('Table').find('tbody').find('tr').find('td').length).toEqual(3);
	})
});
