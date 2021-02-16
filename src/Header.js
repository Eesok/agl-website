import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<span className='header-title'>Appraisal Gem Lab</span>
				<br />
				<span className='header-text'>Knowledge You Can Trust!</span>
				<img
					className='header-logo'
					src='https://imgur.com/HrKKVOu.jpg'
					alt='logo'
				/>
			</div>
		);
	}
}

export default Header;
