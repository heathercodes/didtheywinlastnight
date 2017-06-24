<template>
	<footer class="wrapper">
		<p>Coded for all the Toronto sports-phobic people out there, with love, by <a target="_blank" href="http://heatherpierce.co">Heather Pierce</a></p>
		<p>Powered by <a target="_blank" href="https://www.mysportsfeeds.com/">My Sports Feeds</a> and <a target="_blank" href="https://github.com/Giphy/GiphyAPI">Giphy</a> APIs</p>
	</footer>
</template>

<script>
	
</script>

<style scoped lang="scss">
	footer {
		margin-top: 1rem;
		margin-bottom: 1rem;
		p {
			font-size: 1.8rem;
			text-align: center;
		}
		a {
			border-bottom: 1px solid black;
			transition:0.3s ease all;
			&:hover,
			&:focus {
				color:tomato;
				border-bottom: 2px solid tomato;
			}
		}
	}
</style>
