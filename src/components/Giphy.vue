<template>
	<div class="wrapper">
		<section class="giphy foo">
			<h3>Quick Take</h3>
				<ul class="gifContainer">
					<li v-for="gif in gifs">
						<img :src="gif.images.downsized.url" :alt="text">
					</li>
				</ul>
		</section>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	props: [
		'team'
	],
	methods: {
		checkTeam: function() {
			if (this.team === 'jays') {
				axios.get('https://api.giphy.com/v1/gifs/search?api_key=cc1dabd9cfcb404aa0610a65fe90c441&q=Toronto+Blue+Jays&limit=9&offset=0&rating=G&lang=en')
				.then((response) => {
					this.gifs = response.data.data;
					this.text = 'Jays Gifs';
				}).catch((err) => {
					console.log(err);
				});
			} else if (this.team === 'leafs') {
				axios.get('http://api.giphy.com/v1/gifs/search?q=toronto+maple+leafs&api_key=cc1dabd9cfcb404aa0610a65fe90c441&limit=9&offset=0&rating=G&lang=en')
				.then((response) => {
					this.gifs = response.data;
					this.text = 'Leafs Gifs';
				}).catch((err) => {
					console.log(err);
				});
			} else if (this.team === 'raptors') {
				axios.get('http://api.giphy.com/v1/gifs/search?q=toronto+raptors&api_key=cc1dabd9cfcb404aa0610a65fe90c441&limit=9&offset=0&rating=G&lang=en')
				.then((response) => {
					this.gifs = response.data;
					this.text = 'Raptors Gifs';
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
			gifs: '',
			text: ''
		};
	}
};

</script>

<style scoped lang="scss">

.giphy {
	text-align: center;
	.gifContainer {
		display: flex;
		flex-wrap:wrap;
		justify-content:center;
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			width: 33.333%
		}
	}
	h3 {
		margin-top: 0;
	}
}

@media (max-width: 748px) {
	.giphy {
		.gifContainer {
			li {
				width:50%;
			}
		}
	}
}


</style>
