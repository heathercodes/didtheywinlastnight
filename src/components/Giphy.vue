<template>
	<div class="wrapper">
		<section class="giphy foo">
			<h3>Quick Take</h3>
				<ul class="gifContainer">
					<li v-for="gif in gifs">
						<img :src="gif.images.downsized_small.url" :alt="text">
					</li>
				</ul>
		</section>
	</div>
</template>

<script>

import * as sportsApp from '../data/ajax';

export default {
	props: [
		'team'
	],
	methods: {
		checkTeam: function() {
			if (this.team === 'jays') {
				const gifs = sportsApp.jaysData.getJaysGifs.responseJSON.data;
				this.gifs = gifs;
				this.text = 'Jays Gifs';
			} else if (this.team === 'leafs') {
				const gifs = sportsApp.leafsData.getLeafsGifs.responseJSON.data;
				this.gifs = gifs;
				this.text = 'Leafs Gifs';
			} else if (this.team === 'raptors') {
				const gifs = sportsApp.raptorsData.getRaptorsGifs.responseJSON.data;
				this.gifs = gifs;
				this.text = 'Raptors Gifs';
			}
		},
	},
	created() {
		this.checkTeam();
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
