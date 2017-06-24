<template>

	<div class="wrapper">
		<div class="twitter foo">
			<h3>Talking Points</h3>
			<section class="twitter-data">
				<a :href="link" target="_blank">{{ hashtag }}</a>
				<Timeline :id="'id'" :options="{ height: 380 }"></Timeline>
			</section>
		</div>
	</div>

</template>

<script>

import Vue from 'vue';
import Tweet from 'vue-tweet-embed';

Vue.use(Tweet);

export default {
	props: [
		'team'
	],
	components: {
		Timeline: Tweet
	},
	methods: {
		checkTeam: function() {
			if (this.team === 'jays') {
				// this.tweets = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/BlueJays" data-widget-id="788846188216803328">#BlueJays Tweets</a>';
				// const timeline = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/BlueJays" data-widget-id="788846188216803328">#BlueJays Tweets</a>';
				// this.timeline = timeline;
				// window.twttr.widgets.createTimeline( {
				// 	sourceType: 'widget',
				// 	widgetId: "788846188216803328",
				// },
				// 	document.getElementById("data-here")
				// );
				this.id = 788846188216803328;
				this.link = 'https://twitter.com/hashtag/BlueJays';
				this.hashtag = '#BlueJays Tweets';
			} else if (this.team === 'leafs') {
				const timeline = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/Leafs" data-widget-id="789280534144753667">#Leafs Tweets</a>';
				this.timeline = timeline;
			} else if (this.team === 'raptors') {
				const timeline = '<a class="twitter-timeline"  href="https://twitter.com/hashtag/Raptors" data-widget-id="789473277429231617">#Raptors Tweets</a>';
				this.timeline = timeline;
			}
		},
	},
	created() {
		// window.twttr = (function(d, s, id) {
		//   var js, fjs = d.getElementsByTagName(s)[0],
		//     t = window.twttr || {};
		//   if (d.getElementById(id)) return t;
		//   js = d.createElement(s);
		//   js.id = id;
		//   js.src = "https://platform.twitter.com/widgets.js";
		//   fjs.parentNode.insertBefore(js, fjs);

		//   t._e = [];
		//   t.ready = function(f) {
		//     t._e.push(f);
		//   };

		//   return t;
		// }(document, "script", "twitter-wjs"));
		this.checkTeam();
		// console.log(twitterData);
	},
	data() {
		return {
			id: '',
			link: '',
			hashtag: '',
		};
	}
};

</script>

<style scoped lang="scss">

.twitter {
	text-align: center;
	img {
		width:25%;
	}
}

.twitter-data {
	div {
		height: 450px;
		position: relative;
	}
}

</style>
