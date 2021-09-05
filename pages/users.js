import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

import withAnalytics from '~/hocs/withAnalytics';


const User = ({ users }) => (
	<div>
		<Head>
			<title>Usuários - Matheus Ramalho de Oliveira</title>
		</Head>


		<ul>
			{ users.map(user => (
				<li key={user.id}>
					{ user.login }
					<span> | </span>
					<Link href={`/users/${user.login}`}>
						<a>Acessar perfil</a>
					</Link>
				</li>
			)) }
		</ul>

		<ul>
			<li>Matheus</li>
			<li>Naruto</li>
			<li>Sasuke</li>
		</ul>

		<Link href='/'>
			<a>Voltar</a>
		</Link>
	</div>
);


User.getInitialProps = async () => {
	const response = await axios.get('https://api.github.com/orgs/rocketseat/members');
	console.log(response.data);
	return { users: response.data };
}


export default withAnalytics()(User);