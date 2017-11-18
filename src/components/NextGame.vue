<template>
	<div class="wrapper">

		<article class="next-game-info foo">
			<div class="next-game-image">
				<img src="../assets/wait.svg" alt="text that says 'Wait'" aria-hidden="true">
				<h2 class="hidden">Wait.</h2>
			</div>
			<h3 class="next-game">Is there another one?</h3>
			<p class="next-game-answer">{{ nextGameIs }}</p>
		</article>

	</div>
</template>

<script>

import { scheduleCheck } from '../js/api';
import moment from "moment";
moment().format();
const today = moment().format("YYYY-MM-DD");
const tomorrow = moment()
  .add(1, "days")
  .format("YYYY-MM-DD");

export default {
	props: [
		'team'
	],
	methods: {
		checkNext: function(next) {
			const gameNext = next.fullgameschedule.gameentry.filter((game) => {
				return game.awayTeam.City === 'Toronto' || game.homeTeam.City === 'Toronto';
			});

			const nextDates = gameNext.filter((dates) => {
				return dates.date === tomorrow || dates.date === today;
			});

			if (nextDates !== undefined) {
				let nextDate = nextDates[0].date;
				nextDate = moment().format('MMMM Do YYYY');
				this.nextGameIs = 'Yep, it\'s happening again on ' + nextDate;
			} else {
				this.nextGameIs = 'Thankfully, not today';
			}
		},
		checkTeam: function () {
			switch (this.team) {
				case 'jays':
					scheduleCheck('/mlb/latest/full_game_schedule.json', this.checkNext);
					break;
				
				case 'leafs':
					scheduleCheck('/nhl/latest/full_game_schedule.json', this.checkNext);
					break;

				case 'raptors':
					scheduleCheck('/nba/latest/full_game_schedule.json', this.checkNext);
					break;

				default:
					console.log('the code broke because my cat walked across the keyboard.');
			}
		},
	},
	created() {
		this.checkTeam();
	},
	data() {
		return {
			nextGameIs: ''
		};
	}
};

</script>

<style lang="scss" scoped>

.next-game-info {
	margin-bottom: 8rem;
	text-align: center;
	.next-game-image {
		width:30%;
		margin: 0 auto;
	}
	.next-game {
		margin: 0;
		font-size: 5rem;
	}
	.next-game-answer {
		margin-top: 4rem;
	}
}

@media (max-width: 400px) {
	.next-game-info {
		margin-bottom: 6rem;
		.next-game-image {
			width:40%;
		}
		.next-game-answer {
			margin-bottom: 0;
		}
	}
}

</style>
