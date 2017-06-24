<template>

	<div class="gameFalse">
		<img src="../assets/twngln.png" alt="text that says 'there was no game last night'">
		<h2 class="hidden">There was no game last night!</h2>
		<img src="../assets/no-game.gif" alt="The Breakfast Club dancing joyously at the news that there was no game last night">
		<h2>Have a great day 😙</h2>

		<Refresh></Refresh>

	</div>

</template>

<script>

import Refresh from '../components/Refresh';

export default {
	components: {
		Refresh,
	}
};

</script>

<style scoped lang="scss">

.gameFalse {
	text-align: center;
	margin-top: 3rem;
}

@media (max-width:647px) {
	.gameFalse {
		img:first-child {
			margin-top: 3rem;
		}
	}
}

@media (max-width:563px) {
	.gameFalse {
		h2 {
			font-size: 4rem;
		}
	}
}

</style>
