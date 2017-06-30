<template>
	<div class="wrapper">

		<article class="answer-result">
			<h3 class="hidden answer-text">{{ TheAnswer }}</h3>
			<img class="answer" aria-hidden="true" :src="answer" :alt="answerAlt">
			<img class="answer-image" :src="image" alt="imageAlt">
			<p class="answer-comment">{{ AnswerComment }}</p>
		</article>

	</div>
</template>

<script>

import axios from 'axios';

const moment = require('moment');
moment().format();
const yesterday = moment().add(-1, 'days').format('YYYYMMDD');
const yep = require('../assets/yep.svg');
const nope = require('../assets/nope.svg');

export default {
	props: [
		'team'
	],
	methods: {
		displayResult: function(team, won, wonAlt, lost, lostAlt, comment) {
			const JSONresult = team.scoreboard.gameScore.filter((game) => {
				return game.game.awayTeam.City === 'Toronto' || game.game.homeTeam.City === 'Toronto';
			});

			console.log(JSONresult);

			const awayScore = parseInt(JSONresult[0].awayScore);
			const homeScore = parseInt(JSONresult[0].homeScore);

			if (JSONresult[0].game.homeTeam.City === 'Toronto' && homeScore > awayScore || JSONresult[0].game.awayTeam.City === 'Toronto' && awayScore > homeScore) {

				this.answer = yep;
				this.answerAlt = 'Yep, they won';
				this.TheAnswer = 'Yep, they won';

				this.AnswerComment = comment;
				this.image = won;
				this.imageAlt = wonAlt;

			} else {
				this.answer = nope;
				this.answerAlt = 'Nope, they lost';
				this.TheAnswer = 'Nope, they lost';

				this.AnswerComment = 'I\'m so sorry, they lost (sometimes losing is worse than winning)';

				this.image = lost;
				this.imageAlt = lostAlt;
			}
		},
		checkTeam: function () {
			if (this.team === 'jays') {
				const jaysLost = require('../assets/jays-lost.jpg');
				const jaysLostAlt = 'Jays missing a catch because they lost, womp womp';
				const jaysWon = require('../assets/jays-won.jpg');
				const jaysWonAlt = 'sad looking Jays because we are sad there are more games';
				const AnswerComment = 'I\'m so sorry, they won (it means more people on that bandwagon)';

				axios({
					url:'https://www.mysportsfeeds.com/api/feed/pull/mlb/latest/scoreboard.json',
					params: {
						fordate: yesterday,
					},
					method:'GET',
					responseType: 'json'
				}).then((response) => {
					this.displayResult(response.data, jaysWon, jaysWonAlt, jaysLost,jaysLostAlt, AnswerComment);
				}).catch((err) => {
					console.log(err);
				});
				
			} else if (this.team === 'leafs') {
				const leafsLost = require('../assets/leafs-lost.jpg');
				const leafsLostAlt = 'Leaf missing the puck because they lost, womp womp';
				const leafsWon = require('../assets/leafs-won.jpg');
				const leafsWonAlt = 'sad looking Leafs because we are sad there are more games';
				const AnswerComment = 'I\'m so sorry, they won (this is so rare, everyone will be talking about it)';

				axios({
					url:'https://www.mysportsfeeds.com/api/feed/pull/nhl/latest/scoreboard.json',
					params: {
						fordate: yesterday,
					},
					method:'GET',
					responseType: 'json'
				}).then((response) => {
					this.displayResult(response.data, leafsWon, leafsWonAlt,leafsLost,leafsLostAlt,AnswerComment);
				}).catch((err) => {
					console.log(err);
				});

			} else if (this.team === 'raptors') {
				const raptorsLost = require('../assets/raptors-lost.jpg');
				const raptorsLostAlt = 'Raptors missing the ball because they lost, womp womp';
				const raptorsWon = require('../assets/raptors-won.jpg');
				const raptorsWonAlt = 'sad looking Raptors because we are sad there are more games';
				const AnswerComment = 'I\'m so sorry, they won (maybe you can talk about Drake at least?)';

				axios({
					url:'https://www.mysportsfeeds.com/api/feed/pull/nba/latest/scoreboard.json',
					params: {
						fordate: yesterday,
					},
					method:'GET',
					responseType: 'json'
				}).then((response) => {
					this.displayResult(response.data, raptorsWon, raptorsWonAlt,raptorsLost,raptorsLostAlt, AnswerComment);
				}).catch((err) => {
					console.log(err);
				});
			}
		},
	},
	created() {
		this.checkTeam();
	},
	data() {
		return {
			answer: '',
			TheAnswer: '',
			AnswerComment: '',
			answerAlt: '',
			image: '',
			imageAlt: '',
		};
	}
};

</script>

<style scoped lang="scss">

	.answer-result {
		text-align: center;
		.answer {
			margin:4rem auto 2rem;
			width:50%;
			display: block;
		}
		.answer-comment {
			margin-bottom: 6rem;
		}
	}

	@media (max-width: 400px) {
		.answer-result {
			.answer {
				margin:4rem auto 2rem;
				width:40%;
			}
		}
	}

</style>
