<template>
	<div class="wrapper">
		<section class="giphy foo">
			<h3>Quick Take</h3>
				<ul class="gifContainer">
					<li v-for="gif in gifs">
						<img :src="gif.images.downsized.url">
					</li>
				</ul>
		</section>
	</div>
</template>

<script>

import { giphyCheck } from '../js/api';

export default {
	props: [
		'team'
	],
	methods: {
		assignGifs: function(gify) {
			this.gifs = gify;
		},
		checkTeam: function() {
			if (this.team === 'jays') {
				giphyCheck('Toronto+Blue+Jays', this.assignGifs);

			} else if (this.team === 'leafs') {
				giphyCheck('toronto+maple+leafs', this.assignGifs);

			} else if (this.team === 'raptors') {
				giphyCheck('toronto+raptors', this.assignGifs);
			}
		},
	},
	created() {
		this.checkTeam();
	},
	data() {
		return {
			gifs: ''
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
