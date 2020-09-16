import React, { Component } from 'react';
import R6API from 'r6api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import General from './General';
import Casual from './Casual';
import Ranked from './Ranked';
import Attacker from './Attacker';
import Defender from './Defender';
import Rank from './Rank';
import './App.css';
import Medals from './Medals';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			home: true,
			info: {
				username: null,
				platform: 'uplay',
			},
			data: {
				stats: null,
				level: null,
				season: null,
			},
		};
	}
	onChange = (e) => {
		this.setState({
			info: { ...this.state.info, [e.target.name]: e.target.value },
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.info.username && this.state.info.platform) {
			axios
				.post(
					'https://frozen-lake-99243.herokuapp.com/profile',
					this.state.info
				)
				.then((resp) => {
					const data = resp.data;

					this.setState({
						data: {
							...this.state.data,
							level: data.alllevel,
							stats: data.allstats,
							season: data.latestseason,
						},
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	changeRoute = () => {
		this.setState({
			home: !this.state.home,
		});
	};
	render() {
		return (
			<div class='whole_app'>
				<div
					style={{
						marginTop: '30px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<h1 style={{ color: 'white' }}>StatsTracker R6</h1>
					<div>
						<input
							placeholder='Enter UserName'
							type='text'
							name='username'
							onChange={this.onChange}
						/>

						<select
							placeholder='Select platform'
							name='platform'
							id='platform'
							onChange={this.onChange}
						>
							<option value='uplay'>uplay</option>
							<option value='psn'>psn</option>
							<option value='xbl'>xbl</option>
						</select>
						<Button
							variant='secondary'
							style={{ marginLeft: '20px', marginRight: '20px' }}
							onClick={this.onSubmit}
						>
							Track player
						</Button>
						{this.state.data.stats && this.state.home ? (
							<Button variant='secondary' onClick={this.changeRoute}>
								Operators Stats
							</Button>
						) : null}
						{this.state.data.stats && !this.state.home ? (
							<Button variant='secondary' onClick={this.changeRoute}>
								General Stats
							</Button>
						) : null}
					</div>
				</div>

				<div>
					{this.state.data.stats &&
					this.state.data.level &&
					this.state.data.season ? (
						<div>
							<h3
								style={{
									margin: '0',
									textAlign: 'center',
								}}
							>
								Level: {this.state.data.level}
							</h3>

							<Rank data={this.state.data.season} />

							{this.state.home ? (
								<Row
									style={{
										margin: '30px 0px 30px 0px',
										padding: '0px',
										color: 'black',
										textAlign: 'center',
										display: 'flex',
										justifyContent: 'space-around',
									}}
								>
									<General data={this.state.data.stats.general} />
									<Ranked data={this.state.data.stats.queue.ranked} />
									<Casual data={this.state.data.stats.queue.casual} />
								</Row>
							) : (
								<div>
									<Attacker data={this.state.data.stats.operators} />
									<Defender data={this.state.data.stats.operators} />
								</div>
							)}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
export default App;
