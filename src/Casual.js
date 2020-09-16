import React from 'react';
import { Col } from 'react-bootstrap';
const Casual = (props) => {
	const { kills, deaths, matches, wins, losses, playtime } = props.data;
	const kd = (kills / deaths).toFixed(2);
	const winpercentage = ((wins / (wins + losses)) * 100).toFixed(1);
	const kpm = (kills / matches).toFixed(1);
	var review;
	if (kd >= 1 && kpm > 3) {
		review = 'A good casual profile';
	} else if (kd >= 0.7 && kpm > 2.5) {
		review = 'An average casual profile';
	} else {
		review = 'An bad casual profile';
	}
	return (
		<Col md={3} className='general'>
			<h4>CASUAL</h4>
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

export default Casual;
