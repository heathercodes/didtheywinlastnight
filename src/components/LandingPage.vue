<template>
  <div class="wrapper">
    <form v-on:submit.prevent="onSubmit" v-show="hide">
      <h2>Choose a Turonno team</h2>
      <select name="team-select" id="teamSelect" v-model="selected">
        <option selected value="none"></option>
        <option value="raptors">Raptors</option>
        <option value="jays">Jays</option>
        <option value="leafs">Leafs</option>
        <option value="other">Wait, where's that team?</option>
      </select>
      <input type="submit" value="So what happened last night?">
    </form>

    <Preloader v-if="preload"></Preloader>

    <GameTrue v-if="GameTrue" :team="selected"></GameTrue>

    <GameFalse v-if="GameFalse"></GameFalse>

    <Other v-if="other"></Other>
  </div>
</template>

<script>

import GameTrue from '../components/GameTrue';
import GameFalse from '../components/GameFalse';
import Other from '../components/Other';
import Preloader from './Preloader';
import axios from 'axios';

const moment = require('moment');
moment().format();
const yesterday = moment().add(-1, 'days').format('YYYYMMDD');

export default {
  components: {
    GameFalse,
    GameTrue,
    Other,
    Preloader,
  },
	methods: {
    onSubmit: function(){
      const selection = this.selected;
      this.hide = false;
      this.preload = true;
      if (selection === 'other') {
        this.other = true;
      } else {
        this.checkTeam(selection);
      }
    },
    checkTeam: function(team) {
      if (team === 'jays') {
        axios({
          url:'https://www.mysportsfeeds.com/api/feed/pull/mlb/latest/scoreboard.json',
          params: {
            fordate: yesterday,
          },
          method:'GET',
          responseType: 'json'
        }).then((response) => {
          this.checkGame(response.data);
        }).catch((err) => {
          console.log(err);
        });

      } else if (team === 'leafs') {
        axios({
          url:'https://www.mysportsfeeds.com/api/feed/pull/nhl/latest/scoreboard.json',
          params: {
            fordate: yesterday,
          },
          method:'GET',
          responseType: 'json'
        }).then((response) => {
          this.checkGame(response.data);
        }).catch((err) => {
          console.log(err);
        });

      } else if (team === 'raptors') {
        axios({
          url:'https://www.mysportsfeeds.com/api/feed/pull/nba/latest/scoreboard.json',
          params: {
            fordate: yesterday,
          },
          method:'GET',
          responseType: 'json'
        }).then((response) => {
          this.checkGame(response.data);
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    checkGame: function(team) {
        const gameYesterday = team.scoreboard.gameScore;

        if (gameYesterday !== undefined) {
          const gameYesterdayFilter = gameYesterday.filter((game) => {
          return game.game.awayTeam.City === 'Toronto' || game.game.homeTeam.City === 'Toronto';
          });

          if (gameYesterdayFilter.length !== 0) {
            this.GameTrue = true;
            this.team = team;
          } else {
            this.GameFalse = true;
          }
        } else {
          this.GameFalse = true;
        }
    },
  },
  data() {
    return {
      GameTrue: false,
      GameFalse: false,
      other: false,
      hide: true,
      team: this.selected,
      selected: '',
    };
  },
};

</script>

<style scoped lang="scss">

select {
  background:url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png') no-repeat 98% center;
  font-size: 2rem;
  padding: 0.4rem;
  width:30%;
  appearance:none;
}

input[type=submit] {
  text-align: center;
  display:block;
  padding:1rem;
  background-color: rgb(255, 99, 71);
  border-radius: 5px;
  margin: 1rem auto;
  display: block;
  border: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  &:hover,
  &:focus {
    background-color: darken(rgb(255,99,71),25%);
    color:white;
  }
}

form {
  text-align: center;
}

@media (max-width:840px) {
    select {
        width:53%;
        margin-bottom: 2rem;
      }
  }

  @media (max-width:647px) {
    select {
        width:67%;
    }
  }

@media (max-width: 400px) {
  select {
    display: block;
    width:75%;
    margin:5rem auto;
  }
  input[type=submit] {
    display: block;
    width:100%;
    margin:0 auto;
  }
}

</style>
