<template>
	<section class="otherTeams">
		<img src="../assets/sorry.svg" alt="" aria-hidden="true">
		<h2 class="hidden">Sorry!</h2>
		<img src="../assets/other-teams.gif" alt="a gif with a soccer player looking confused">
		<p>While the awesome <a target="_blank" href="https://www.mysportsfeeds.com/">My Sports Feed API</a> is super powerful and easy to use, it only has data for American sports leagues, i.e. not the CFL, and definitely does not include soccer data (which is inherently not American? idk please don't educate me on this).</p>
		<p>This means the hunt is on for another two APIs to work with that: 1) are free, 2) have the relevant data, and, as a bonus, 3) have full documentation and are easy to use 🤔</p>
		<p>If you know of such beautiful unicorn APIs, please shoot me an email at <a href="mailto:hello@heatherpierce.co">hello@heatherpierce.co</a></p>
		<p>Until then, we'll have to suffer without</p>
		<Refresh></Refresh>
	</section>
</template>

<script>

import Refresh from '../components/Refresh';

export default {
	components: {
		Refresh,
	},
};

</script>

<style scoped lang="scss">
	.otherTeams {
		font-size: 2rem;
		text-align: center;
		img {
			&:first-of-type {
				width:50%;
				display: block;
				margin:0 auto;
				padding-bottom: 2rem;
				padding-top: 1rem;
			}
		}
		a {
			text-decoration: underline;
			transition: color 0.3s ease;
			&:hover,
			&:focus {
				color:tomato;
			}
		}
	}
</style>
