import React from 'react';
import { mount } from 'enzyme';
import ResultDetail from '../ResultDetail';

describe('ResultList', () => {
	let resultDetail;
	beforeEach(() => {
		const result = {
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
		};

		const repos = [{
			'id': 46093925,
			'name': 'leave-application',
			'full_name': 'KienDangTran/leave-application',
			'owner': {
				'login': 'KienDangTran',
				'id': 14361196,
				'avatar_url': 'https://avatars1.githubusercontent.com/u/14361196?v=3',
				'gravatar_id': '',
				'url': 'https://api.github.com/users/KienDangTran',
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
				'site_admin': false
			},
			'private': false,
			'html_url': 'https://github.com/KienDangTran/leave-application',
			'description': null,
			'fork': false,
			'url': 'https://api.github.com/repos/KienDangTran/leave-application',
			'forks_url': 'https://api.github.com/repos/KienDangTran/leave-application/forks',
			'keys_url': 'https://api.github.com/repos/KienDangTran/leave-application/keys{/key_id}',
			'collaborators_url': 'https://api.github.com/repos/KienDangTran/leave-application/collaborators{/collaborator}',
			'teams_url': 'https://api.github.com/repos/KienDangTran/leave-application/teams',
			'hooks_url': 'https://api.github.com/repos/KienDangTran/leave-application/hooks',
			'issue_events_url': 'https://api.github.com/repos/KienDangTran/leave-application/issues/events{/number}',
			'events_url': 'https://api.github.com/repos/KienDangTran/leave-application/events',
			'assignees_url': 'https://api.github.com/repos/KienDangTran/leave-application/assignees{/user}',
			'branches_url': 'https://api.github.com/repos/KienDangTran/leave-application/branches{/branch}',
			'tags_url': 'https://api.github.com/repos/KienDangTran/leave-application/tags',
			'blobs_url': 'https://api.github.com/repos/KienDangTran/leave-application/git/blobs{/sha}',
			'git_tags_url': 'https://api.github.com/repos/KienDangTran/leave-application/git/tags{/sha}',
			'git_refs_url': 'https://api.github.com/repos/KienDangTran/leave-application/git/refs{/sha}',
			'trees_url': 'https://api.github.com/repos/KienDangTran/leave-application/git/trees{/sha}',
			'statuses_url': 'https://api.github.com/repos/KienDangTran/leave-application/statuses/{sha}',
			'languages_url': 'https://api.github.com/repos/KienDangTran/leave-application/languages',
			'stargazers_url': 'https://api.github.com/repos/KienDangTran/leave-application/stargazers',
			'contributors_url': 'https://api.github.com/repos/KienDangTran/leave-application/contributors',
			'subscribers_url': 'https://api.github.com/repos/KienDangTran/leave-application/subscribers',
			'subscription_url': 'https://api.github.com/repos/KienDangTran/leave-application/subscription',
			'commits_url': 'https://api.github.com/repos/KienDangTran/leave-application/commits{/sha}',
			'git_commits_url': 'https://api.github.com/repos/KienDangTran/leave-application/git/commits{/sha}',
			'comments_url': 'https://api.github.com/repos/KienDangTran/leave-application/comments{/number}',
			'issue_comment_url': 'https://api.github.com/repos/KienDangTran/leave-application/issues/comments{/number}',
			'contents_url': 'https://api.github.com/repos/KienDangTran/leave-application/contents/{+path}',
			'compare_url': 'https://api.github.com/repos/KienDangTran/leave-application/compare/{base}...{head}',
			'merges_url': 'https://api.github.com/repos/KienDangTran/leave-application/merges',
			'archive_url': 'https://api.github.com/repos/KienDangTran/leave-application/{archive_format}{/ref}',
			'downloads_url': 'https://api.github.com/repos/KienDangTran/leave-application/downloads',
			'issues_url': 'https://api.github.com/repos/KienDangTran/leave-application/issues{/number}',
			'pulls_url': 'https://api.github.com/repos/KienDangTran/leave-application/pulls{/number}',
			'milestones_url': 'https://api.github.com/repos/KienDangTran/leave-application/milestones{/number}',
			'notifications_url': 'https://api.github.com/repos/KienDangTran/leave-application/notifications{?since,all,participating}',
			'labels_url': 'https://api.github.com/repos/KienDangTran/leave-application/labels{/name}',
			'releases_url': 'https://api.github.com/repos/KienDangTran/leave-application/releases{/id}',
			'deployments_url': 'https://api.github.com/repos/KienDangTran/leave-application/deployments',
			'created_at': '2015-11-13T02:12:24Z',
			'updated_at': '2015-11-13T02:17:14Z',
			'pushed_at': '2015-11-13T02:17:14Z',
			'git_url': 'git://github.com/KienDangTran/leave-application.git',
			'ssh_url': 'git@github.com:KienDangTran/leave-application.git',
			'clone_url': 'https://github.com/KienDangTran/leave-application.git',
			'svn_url': 'https://github.com/KienDangTran/leave-application',
			'homepage': null,
			'size': 0,
			'stargazers_count': 0,
			'watchers_count': 0,
			'language': 'Java',
			'has_issues': true,
			'has_projects': true,
			'has_downloads': true,
			'has_wiki': true,
			'has_pages': false,
			'forks_count': 0,
			'mirror_url': null,
			'open_issues_count': 0,
			'forks': 0,
			'open_issues': 0,
			'watchers': 0,
			'default_branch': 'master'
		}]

		resultDetail = mount(<ResultDetail result={ result } repos={ repos } />);
	});

	it('Render Go Back Button', () => {
		expect(resultDetail.find('Button').length).toEqual(1);
	});

	it('Render User Details', () => {
		expect(resultDetail.find('Grid').length).toEqual(1);
		expect(resultDetail.find('Grid').find('h3').length).toEqual(1);
		expect(resultDetail.find('Grid').find('Row').length).toEqual(19);
		expect(resultDetail.find('Grid').find('Col').length).toEqual(38);
	});

	it('Render repositories list', () => {
		expect(resultDetail.find('Table').length).toEqual(1);
		expect(resultDetail.find('Table').find('tbody').find('tr').length).toEqual(1);
		expect(resultDetail.find('Table').find('tbody').find('tr').find('td').length).toEqual(9);
	})
});
