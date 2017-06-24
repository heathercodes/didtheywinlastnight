<template>
  <div>
    <section class="animate-raptors" aria-hidden="true" v-show="basketball">
      <svg id="raptors-ball" data-name="raptors-ball" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.78 206.41">
      <path class="ball" d="M202.94,179.94C190.24,183.77,167.3,193,150,215c-20.55,26.19-21.67,55.92-22.54,78.93C126.81,311.33,129.14,320,130,323c1,3.49,8.42,27.62,31.66,42.82,19.81,13,39.82,11.9,58.19,11.18,39.85-1.57,80.83-17.8,104.06-50.22a70.78,70.78,0,0,0,11.39-24.87c11.1-42.64-18.16-80.29-23.31-86.91-5.77-7.43-14.51-18.44-30-27-27.51-15.2-55-10.88-66-9a115.43,115.43,0,0,0-55,26" transform="translate(-123.02 -173.96)"/><path class="ball" d="M271.06,184.15a84.21,84.21,0,0,0,5.26,110.64c13.74,14.3,32.06,23.3,50.57,30.41" transform="translate(-123.02 -173.96)"/><path class="ball" d="M143.49,226.52c36,35.2,48.22,92.69,29.53,139.48" transform="translate(-123.02 -173.96)"/><path class="ball" d="M197.89,185c-0.42,12.31,3.12,24.37,6.63,36.18l44.57,150.11" transform="translate(-123.02 -173.96)"/><path class="ball" d="M124.32,314.66Q221.38,268,321.17,227.43" transform="translate(-123.02 -173.96)"/></svg>
    </section>

    <section class="animate-leafs" aria-hidden="true" v-show="hockey">
      <svg id="leafs-puck" data-name="leafs-puck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.6 55.68">
      <path class="puck" d="M178.84,229q-1,14.26-3.38,28.51" transform="translate(-172.22 -217.28)"/><path class="puck" d="M280.34,257.55q0.64-14.3,2.58-28.62" transform="translate(-172.22 -217.28)"/><path class="puck" d="M176,257.1c-1.34-.2-0.77,2.11.35,2.88,10.87,7.41,24.71,8.46,37.85,9.22,24.32,1.42,50.42,2.22,71-10.76" transform="translate(-172.22 -217.28)"/><path class="puck" d="M282.77,232.76c-8.3,8.07-21.17,8.54-32.75,8.34-21.66-.38-43.4-1.4-64.68-5.42-3.33-.63-7.64-3.19-6.08-6.2,1.73-3.35,3.72-2.74,7.4-3.53,29-6.25,59.77-8.78,88.12.08C277.7,226.94,281.46,230,282.77,232.76Z" transform="translate(-172.22 -217.28)"/></svg>
    </section>

    <section class="animate-jays" aria-hidden="true" v-show="baseball">
      <svg id="jays-throw" data-name="jays-throw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.4 153.77">
      <path class="throw" d="M260.11,148.91c-4.29-.51-37.62-3.85-63.37,21.5-25,24.66-22.87,56.73-22.45,63,0.56,8.21,1.87,24.29,13.65,38.4C195.57,281,204.18,285.21,210,288c23,11,44.53,7.23,51,6a79.13,79.13,0,0,0,27-10.37A72.51,72.51,0,0,0,298,276c17.79-16.34,22.14-38.65,23.17-44.34A87.79,87.79,0,0,0,320,196c-2-8.39-4.48-18.54-13-28-7.18-8-15.09-11.41-21-14a79.14,79.14,0,0,0-44-5,80.78,80.78,0,0,0-36,16" transform="translate(-171.06 -144.87)"/><path class="throw" d="M274.58,152.5c-13.73,12.1-15.45,32.58-15.57,50.88,0,6.51,0,13.19,2.32,19.28,2.5,6.61,7.42,12,12.23,17.16,9.64,10.39,19.66,21.05,32.62,26.77" transform="translate(-171.06 -144.87)"/><path class="throw" d="M193.23,171.65a69.27,69.27,0,0,1,17.16,37.59,103.86,103.86,0,0,1,.11,20.84,211.68,211.68,0,0,1-10.8,52.12" transform="translate(-171.06 -144.87)"/><path class="throw" d="M255,164a54.43,54.43,0,0,1,22.09,2.71" transform="translate(-171.06 -144.87)"/><path class="throw" d="M250.09,183.69A97.36,97.36,0,0,0,272,187.17" transform="translate(-171.06 -144.87)"/><path class="throw" d="M252.37,210.5c0.47-.38-0.89-0.46-0.66.1s1,0.48,1.63.3l13.57-4.2" transform="translate(-171.06 -144.87)"/><path class="throw" d="M257.21,236.23l15.89-14.12" transform="translate(-171.06 -144.87)"/><path class="throw" d="M269.11,258.09l15.79-19.17" transform="translate(-171.06 -144.87)"/><path class="throw" d="M286.24,267.18l10.59-14.3" transform="translate(-171.06 -144.87)"/><path class="throw" d="M196.42,191.6a68,68,0,0,1,13.66-14.5" transform="translate(-171.06 -144.87)"/><path class="throw" d="M199,206.07l23-3.15" transform="translate(-171.06 -144.87)"/><path class="throw" d="M201.17,218.93c-1.44,1.33,1.13,3.23,3.08,3.49l17.87,2.36" transform="translate(-171.06 -144.87)"/><path class="throw" d="M195.15,255.71l16,8.08" transform="translate(-171.06 -144.87)"/><path class="throw" d="M200.74,236.55a42.75,42.75,0,0,0,18.26,4" transform="translate(-171.06 -144.87)"/></svg>
    </section>
  </div>
</template>

<script>

export default {
  props: [
    'team'
  ],
  methods: {
    checkTeam: function() {
      if (this.team === 'jays') {
        this.baseball = true;
      } else if (this.team === 'leafs') {
        this.hockey = true;
      } else if (this.team === 'raptors') {
        this.basketball = true;
      }
    }
  },
  data() {
    return {
      hockey: false,
      baseball: false,
      basketball: false
    };
  },
  created() {
    this.checkTeam();
  }
};

</script>

<style lang="scss" scoped>

.ball, .puck, .throw{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:6px;}

.animate-raptors {
	padding-top:4rem;
	padding-bottom: 4rem;
	#raptors-ball {
	  width:6%;
	  animation: spin 1s infinite linear, bounce 1s infinite ease, move 10s ease infinite;
	  position:relative;
	}
}

.animate-leafs {
	padding-top:4rem;
	padding-bottom: 4rem;
	#leafs-puck {
		width:4%;
		animation: zig-zag 3s infinite linear;
		position:relative;
	}
}

.animate-jays {
	padding-top:4rem;
	padding-bottom: 4rem;
	#jays-throw {
	  width:3%;
	  animation: throw 1.5s infinite linear alternate;
	  position:relative;
	}
}

@keyframes spin {
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  from, to {
    bottom:0;
  }
  50% {
    bottom:100px;
  }
}

@keyframes move {
  0% {
    left:-5%;
  }
  100% {
    left:115%;
  }
}

@keyframes zig-zag {
    0% {
        left:-10%;
        top:50px;
    }
    25% {
        left:15%;
        top:-50px;
    }
    50% {
        left:35%;
        top:50px;
    }
    75% {
        left:65%;
        top:-50px;
    }
    100% {
        left:100%;
        top:50px;
    }
}

@keyframes throw {
  0% {
    left:-10%;
  }
  
  50% {
    transform:translateY(-100px);
  }
  
  100% {
    left:110%;
  }
}

@media (max-width:647px) {
  .animate-raptors, .animate-jays, .animate-leafs {
    display: none;
  }
}

</style>
