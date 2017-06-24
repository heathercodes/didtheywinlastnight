<template>

	<div class="gameTrue">

		<Answer :team="team"></Answer>

		<NextGame :team="team"></NextGame>

		<SportAnimation :team="team"></SportAnimation>

		<!-- <TwitterWidget :team="team"></TwitterWidget> -->

		<Giphy :team="team"></Giphy>

		<h2>And now you're prepared for the day👍</h2>

		<Refresh></Refresh>

	</div>

</template>

<script>

import Answer from '../components/Answer';
import NextGame from '../components/NextGame';
import SportAnimation from '../components/SportAnimation';
import TwitterWidget from '../components/TwitterWidget';
import Giphy from '../components/Giphy';
import Refresh from '../components/Refresh';

export default {
	components: {
		Answer,
		NextGame,
		SportAnimation,
		TwitterWidget,
		Giphy,
		Refresh,
	},
	props: [
		'team'
	],
	data() {
		return {
		};
	},
};

</script>

<style scoped lang="scss">

.gameTrue {
	margin-top: 2rem;
	margin-bottom: 6rem;
	h2 {
		text-align: center;
		font-size:4rem;
	}
}

@media (max-width:563px) {
	.gameTrue {
		h2 {
			font-size: 4rem;
		}
	}
}

</style>
