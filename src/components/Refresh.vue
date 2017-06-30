<template>
	<button class="check-new-team" v-on:click="refresh">Check another team?</button>
</template>

<script>

export default {
	methods: {
		refresh: function () {
			window.location.reload();
			this.$router.push('/');
			window.scrollTo(0, 0);
		},
	},
};

</script>

<style scoped lang="scss">

.check-new-team {
	background-color: rgb(255, 99, 71);
	border:none;
	padding:1rem;
	transition:0.3s ease background-color;
	border-radius: 5px;
	margin: 0 auto 1rem;
	text-transform: uppercase;
	font-size: 1.5rem;
	display: block;
	text-align: center;
	&:hover,
	&:focus {
		background-color: darken(rgb(255,99,71),25%);
		color:white;
	}
}

</style>
