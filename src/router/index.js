import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GameTrue from '@/components/GameTrue';
import GameFalse from '@/components/GameFalse';
import Other from '@/components/Other';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
    	path: '/game-results',
    	component: GameTrue,
      props: true,
    },
    {
    	path: '/no-game',
    	component: GameFalse,
    },
    {
    	path: '/other',
    	component: Other
    }
  ],
});
