import React from 'react';

import Medals from './Medals';
const Rank = (props) => {
	const seasons = props.data;
	return (
		<div className='rank'>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				{Object.keys(seasons).map((key, i) => {
					const season = seasons[key];
					return (
						<div
							className='card'
							style={{
								backgroundColor: '#282c34',
								color: 'white',
								boxShadow: '0px 0px 20px',
							}}
							key={i}
						>
							<img src={season.image} />
							<p
								style={{
									textAlign: 'center',
									fontWeight: 'bold',
									borderBottom: '1px solid black',
									marginBottom: '5px',
								}}
							>
								{season.name}
							</p>
							<Medals data={season.regions} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Rank;
