import React from 'react';

const Attacker = (props) => {
	const attacker = props.data;
	return (
		<div>
			<h2
				style={{
					textAlign: 'center',
					paddingTop: '10px',
					borderTop: '1px solid white',
				}}
			>
				Attackers
			</h2>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				{Object.keys(attacker).map((key, i) => {
					const operator = attacker[key];
					if (operator.role == 'attacker') {
						return (
							<div className='card' key={i}>
								<img src={operator.badge} />
								<p
									style={{
										textAlign: 'center',
										fontWeight: 'bold',
										borderBottom: '1px solid black',
										marginBottom: '5px',
									}}
								>
									{operator.name}
								</p>
								<p style={{ fontWeight: 'bold', marginTop: '5px' }}>
									{(operator.kills / operator.deaths).toFixed(2)} KD
								</p>
								<p>{(operator.playtime / 3600).toFixed(0)} hrs Playtime</p>
								<p>{operator.kills} kills</p>
								<p>{operator.deaths} deaths </p>
								<p>{operator.headshots} headshots</p>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Attacker;
