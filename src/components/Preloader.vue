<template>
	<div class="preloader" v-if="active">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-10 -30 87.4 292.4">
		<path class="st0" d="M14.6,205.5c1.1,2.3,0,5.4-2.4,6.5c0.5-0.8-0.8-1.9-1.5-1.3s0.3,2.1,1.1,1.6"/>
		<path class="st0 draw" d="M16.5,62.8C2.7,55.8-2.7,37,3.5,22.9S25.3,0.1,40.8,0c9.6,0,19.8,3.3,25.4,11.1c4.5,6.1,5.5,14.1,5.1,21.7
			c-1.1,18.2-10.2,35-21.4,49.4S25.3,109.1,13.6,123c-6.3,7.4-12.3,15.8-13.4,25.4c-1.2,9.7,4.3,20.7,13.8,22.7"/>
		</svg>
	</div>
</template>

<script>

export default {
	methods: {
		preload: function() {
			window.scrollTo(0, 0);
			setTimeout(() => {
				document.body.className = 'init';
				setTimeout(() => {
					this.active = false;
				}, 500);
			}, 2500);
		}
	},
	mounted() {
		this.preload();
	},
	data() {
		return {
			active: true,
		};
	}
};

</script>

<style lang="scss" scoped>

body.init {
	.preloader {
		top: 100%;
	}
}

.preloader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	transition: top 500ms ease-in-out;
}

svg {
	width: 5%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}

.st0{fill:none;}

path {
  stroke: black;
  stroke-width:5px;
  stroke-dashoffset:1000;
  stroke-dasharray:1000;
  animation:dash 0.2s forwards ease;
}

.draw {
  stroke: black;
  stroke-width:5px;
  stroke-dashoffset:1000;
  stroke-dasharray:1000;
  animation:dash 7s 0.5s forwards ease;
}

@keyframes dash {
  100% {
    stroke-dashoffset:0;
  }
}

</style>
