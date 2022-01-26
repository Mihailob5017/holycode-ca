import React from 'react';

// Components
import TemplateList from '../components/TemplateList.container';

const Homepage = () => {
	return (
		<div className='page lists-show'>
			<nav>
				<h1 className='title-page'>
					<span className='title-wrapper'>CASUS</span>
				</h1>
			</nav>
			<TemplateList />
		</div>
	);
};

export default Homepage;
