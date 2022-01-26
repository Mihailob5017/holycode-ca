import React from 'react';
import PropTypes from 'prop-types';

// Components
import Template from './Template';
import Loading from './Loading';

// Code
const TemplateList = ({
	templates,
	loading,
	selectedTab,
	onPinTask,
	onArchiveTask,
	onChangeTab,
	onResetTask,
}) => {
	const events = { onPinTask, onArchiveTask, onResetTask };

	const sortedTemplateList = (templates = []) => {
		const pinnedTemplates = templates.filter(
			(template) => template.state === 'TASK_PINNED'
		);
		const otherTemplates = templates.filter(
			(template) => template.state !== 'TASK_PINNED'
		);

		return [...pinnedTemplates, ...otherTemplates];
	};

	const filterAndSortTemplates = (templates, state) => {
		if (state === 'ALL') return sortedTemplateList(templates);
		else return templates.filter((template) => template.state === state);
	};

	if (loading === true) {
		return <Loading />;
	} else
		return (
			<>
				<div className='category-group'>
					<button
						disabled={selectedTab === 'ALL'}
						onClick={() => onChangeTab('ALL')}
						className={`category-btn ${
							selectedTab === 'ALL' && 'selected-category'
						} `}
					>
						All Tasks
					</button>
					<button
						disabled={selectedTab === 'TASK_PINNED'}
						onClick={() => onChangeTab('TASK_PINNED')}
						className={`category-btn ${
							selectedTab === 'TASK_PINNED' && 'selected-category'
						} `}
					>
						Pinned
					</button>
					<button
						disabled={selectedTab === 'TASK_ARCHIVED'}
						onClick={() => onChangeTab('TASK_ARCHIVED')}
						className={`category-btn ${
							selectedTab === 'TASK_ARCHIVED' && 'selected-category'
						} `}
					>
						Archived
					</button>
				</div>
				<div className='list-items'>
					{filterAndSortTemplates(templates, selectedTab).length === 0 ? (
						<div className='wrapper-message'>
							<span className='icon-check' />
							<div className='title-message'>You have no templates</div>
							<div className='subtitle-message'>Sit back and relax</div>
						</div>
					) : (
						filterAndSortTemplates(templates, selectedTab).map((template) => (
							<Template key={template.id} template={template} {...events} />
						))
					)}
				</div>
			</>
		);
};

TemplateList.propTypes = {
	templates: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
			state: PropTypes.oneOf(['', 'TASK_ARCHIVED', 'TASK_PINNED']),
		})
	),
	loading: PropTypes.bool.isRequired,
	selectedTab: PropTypes.oneOf(['TASK_ARCHIVED', 'TASK_PINNED', 'ALL']),
	onPinTask: PropTypes.func.isRequired,
	onArchiveTask: PropTypes.func.isRequired,
	onChangeTab: PropTypes.func.isRequired,
	onResetTask: PropTypes.func.isRequired,
};

TemplateList.defaultProps = {
	templates: [],
	selectedTab: 'ALL',
	loading: true,
};

export default TemplateList;
