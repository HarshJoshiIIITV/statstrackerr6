import React from 'react';

import { Col } from 'react-bootstrap';

const Ranked = (props) => {
	const { kills, deaths, matches, wins, losses, playtime } = props.data;
	const kd = (kills / deaths).toFixed(2);
	const winpercentage = ((wins / (wins + losses)) * 100).toFixed(1);
	const kpm = (kills / matches).toFixed(1);
	var review = null;
	if (kd >= 1.1 && matches > 1500 && kpm >= 4.8) {
		review = 'Excellent player';
	} else if (kd >= 1 && matches > 1000 && kpm >= 4) {
		review = 'Very good player';
	}

	if (kd >= 1.5 && kpm >= 5 && matches < 300) {
		review = 'Excellent smurf/ New account';
	} else if (kd >= 1 && kpm >= 5 && matches < 300) {
		review = 'Very good smurf/ New account';
	} else if (kd >= 1 && kpm >= 4 && matches < 300) {
		review = 'Good smurf/ New account';
	}
	if (kd <= 0.7) {
		review = 'Poor player';
	}
	return (
		<Col md={3} className='general'>
			<h4>RANKED</h4>
			<div className='flex_box'>
				<div className='highlight review' style={{ justifyContent: 'center' }}>
					<p>{review}</p>
				</div>
				<div className='highlight'>
					<p>Play Time</p>
					<p>{(playtime / 3600).toFixed(0)} hr</p>
				</div>
				<div className='highlight'>
					<p>Matches played</p>
					<p>{matches}</p>
				</div>
				<div className='highlight'>
					<p>KD</p>
					<p>{kd}</p>
				</div>
				<div className='highlight'>
					<p>Kills per Match</p>
					<p>{kpm}</p>
				</div>
				<div
					className='highlight border_bottom'
					style={{ paddingBottom: '8px' }}
				>
					<p>Win Percentage</p>
					<p>{winpercentage}%</p>
				</div>

				<div style={{ marginTop: '8px' }}>
					<p>Wins</p>
					<p>{wins}</p>
				</div>
				<div>
					<p>Losses</p>
					<p>{losses}</p>
				</div>
				<div>
					<p>Kills</p>
					<p>{kills}</p>
				</div>
				<div>
					<p>Deaths</p>
					<p>{deaths}</p>
				</div>
			</div>
		</Col>
	);
};

export default Ranked;
