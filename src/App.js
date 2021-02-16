import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';
import ContactContainer from './ContactContainer';
class App extends Component {
	render() {
		return (
			<div id='body'>
				<Header />
				<div class='topnav'>
					<a href='#'>Link</a>
					<a href='#'>Link</a>
					<a href='#'>Link</a>
				</div>
				<Cards />
				<ContactContainer />
			</div>
		);
	}
}

export default App;
