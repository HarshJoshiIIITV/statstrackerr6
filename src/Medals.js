import React from 'react';

const Medals = (props) => {
	const regions = props.data;
	const key = Object.keys(regions)[0];
	const region = regions[key];
	return (
		<div style={{ padding: '0px 10px 5px 10px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					borderBottom: '1px solid black',
				}}
			>
				<div>
					<img
						src={region.current.image}
						style={{ width: '50px', height: '50px' }}
					/>
				</div>
				<div>
					<p style={{ marginBottom: '0px' }}>Latest</p>
					<p style={{ textAlign: 'center' }}>{region.current.mmr} </p>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					borderBottom: '1px solid black',
				}}
			>
				<div>
					<img
						src={region.max.image}
						style={{ width: '50px', height: '50px' }}
					/>
				</div>
				<div>
					<p style={{ marginBottom: '0px' }}>Maxximum</p>
					<p style={{ textAlign: 'center' }}>{region.max.mmr}</p>
				</div>
			</div>
			<div className='flex_box'>
				<div>
					<p>KD</p>
					<p> {(region.kills / region.deaths).toFixed(2)}</p>
				</div>
				<div>
					<p>Matches</p>
					<p>{region.matches}</p>
				</div>
				<div>
					<p>Wins</p>
					<p>{region.wins}</p>
				</div>
				<div>
					<p>Losses</p>
					<p>{region.losses}</p>
				</div>
				<div>
					<p>Abandons</p>
					<p>{region.abandons}</p>
				</div>
			</div>
		</div>
	);
};
export default Medals;
