import React from 'react';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics';


const Detail = ({ user }) => (
	<div>
		{ user ? (
			<>
			<h1>{ user.login }</h1>
			<img src={user.avatar_url} width='200' />
			</>
		) : (
			<h1>404</h1>
		)}
	</div>
)


Detail.getInitialProps = async ({ query }) => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${query.user}`
		);
		return { user: response.data };
	}
	catch {
		return { user: null };
	}
}


export default withAnalytics()(Detail);