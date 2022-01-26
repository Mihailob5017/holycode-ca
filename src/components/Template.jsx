import React from 'react';
import PropTypes from 'prop-types';

// IMG
import TemplateBG from '../assets/bg-img.png';
import PinTag from '../assets/pin.svg';
import ArchiveSvg from '../assets/archive.svg';
import ResetSvg from '../assets/reset.svg';

// Moment Library for handiling dates
import moment from 'moment';

// Code
const Template = ({
	template: { id, title, date, state },
	onPinTask,
	onArchiveTask,
	onResetTask,
}) => {
	return (
		<div
			className={`template-container ${
				state === 'TASK_PINNED' && 'pinned-template'
			}`}
		>
			<img src={TemplateBG} className='template-img' alt='Background Img' />
			<div className='template-info-wrapper'>
				<p className='template-head'>
					{state === 'TASK_PINNED' && (
						<img src={PinTag} alt='Pin Tag' className='pinned-tag' />
					)}
					{title}
				</p>

				<div className='template-date-wrapper'>
					<p className='template-logo'>c</p>
					<p className='template-date'>{moment(date, 'YYYYMMDD').fromNow()}</p>

					<button
						disabled={state === 'TASK_PINNED'}
						onClick={() => onPinTask(id)}
						className={`archive-btn pin-btn ${
							state === 'TASK_PINNED' && 'disabled'
						}`}
					>
						<img src={PinTag} alt='pin-svg' />
					</button>
					<button
						disabled={state === 'TASK_ARCHIVED'}
						onClick={() => onArchiveTask(id)}
						className={`archive-btn ${state === 'TASK_ARCHIVED' && 'disabled'}`}
					>
						<img src={ArchiveSvg} alt='archive-svg' />
					</button>
					{state !== '' && (
						<button
							onClick={() => onResetTask(id)}
							className='archive-btn reset-btn'
						>
							<img src={ResetSvg} alt='archive-svg' />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

Template.propTypes = {
	template: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
		state: PropTypes.oneOf(['', 'TASK_ARCHIVED', 'TASK_PINNED']),
	}).isRequired,
	onPinTask: PropTypes.func.isRequired,
	onArchiveTask: PropTypes.func.isRequired,
	onResetTask: PropTypes.func.isRequired,
};

export default Template;
