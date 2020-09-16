import React from 'react';
import { Col } from 'react-bootstrap';
import './App.css';
const General = (props) => {
	const {
		kills,
		deaths,
		assists,
		headshots,
		meleeKills,
		penetrationKills,
		blindKills,
		matches,
		wins,
		losses,
		playtime,
	} = props.data;
	const kd = (kills / deaths).toFixed(2);
	const winpercentage = ((wins / (wins + losses)) * 100).toFixed(1);
	return (
		<Col md={3} className='general'>
			<h4>GENERAL</h4>
			<div className='flex_box'>
				<div className='highlight'>
					<p>Play time</p>
					<p>{(playtime / 3600).toFixed(0)} hr</p>
				</div>
				<div className='highlight'>
					<p>Matches</p>
					<p>{matches}</p>
				</div>
				<div className='highlight border_bottom'>
					<p>KD</p>
					<p>{kd}</p>
				</div>
				<div>
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

				{/* <p>win percentage: {winpercentage}</p> */}
				<div>
					<p>Assists</p>
					<p>{assists}</p>
				</div>
				<div>
					<p>headshots</p>
					<p>{headshots}</p>
				</div>
				<div>
					<p>meleeKills</p>
					<p>{meleeKills}</p>
				</div>
				<div>
					<p>penetrationKills</p>
					<p>{penetrationKills}</p>
				</div>
				<div>
					<p>blindKills</p>
					<p>{blindKills}</p>
				</div>
			</div>
		</Col>
	);
};

export default General;
