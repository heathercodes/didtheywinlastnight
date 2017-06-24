import $ from 'jquery';

// Date data!
const moment = require('moment');
moment().format();
const yesterday = moment().add(-1, 'days').format('YYYYMMDD');

// Raptors Data Begins
const raptorsData = {};

raptorsData.getRaptorsNext =
	$.ajax({
		headers: {
			"Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/nba/latest/full_game_schedule.json',
		method:'GET',
		dataType: 'json'
	});

raptorsData.getRaptorsResults =
	$.ajax({
		headers: {
		    "Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/nba/latest/scoreboard.json',
		data: {
			fordate: yesterday,
		},
		method:'GET',
		dataType: 'json'
	});

raptorsData.getRaptorsGifs =
	$.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=toronto+raptors&api_key=dc6zaTOxFJmzC',
		method:'GET',
		dataType:'json',
		data: {
			limit:9,
			sort:'recent'
		}
	});

// raptorsData.display = function () {
// 	$.when(raptorsData.getRaptorsResults, raptorsData.getRaptorsNext, raptorsData.getRaptorsGifs)
// 		.then(function () {
// 			return raptorsData.getRaptorsResults, raptorsData.getRaptorsNext, raptorsData.getRaptorsGifs;
// 	});
// };

// Leafs Data Begins
const leafsData = {};

leafsData.getLeafsNext =
	$.ajax({
		headers: {
		    "Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/nhl/latest/full_game_schedule.json',
		method:'GET',
		dataType:'json'
	});

leafsData.getLeafsResults =
	$.ajax({
		headers: {
		    "Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/nhl/latest/scoreboard.json',
		data: {
			fordate: yesterday
		},
		method:'GET',
		dataType: 'json',
	});


leafsData.getLeafsGifs = $.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=toronto+maple+leafs&api_key=dc6zaTOxFJmzC',
		method:'GET',
		dataType:'json',
		data: {
			limit:9,
			sort:'recent'
		}
});

// leafsData.display = function (leafsResults, leafsNext, leafsGifs) {
// 	$.when(leafsData.getLeafsResults, leafsData.getLeafsNext, leafsData.getLeafsGifs)
// 		.then(function(leafsResults, leafsNext, leafsGifs) {

// Jay's data below
const jaysData = {};

jaysData.getJaysNext =
	$.ajax({
		headers: {
		    "Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/mlb/latest/full_game_schedule.json',
		method:'GET',
		dataType:'json'
	});

jaysData.getJaysResults =
	$.ajax({
		headers: {
		    "Authorization": "Basic " + btoa('heather' + ":" + '1234Kobo%')
		},
		url:'https://www.mysportsfeeds.com/api/feed/pull/mlb/latest/scoreboard.json',
		data: {
			fordate: yesterday,
		},
		method:'GET',
		dataType: 'json'
	});

jaysData.getJaysGifs =
	$.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=toronto+blue+jays&api_key=dc6zaTOxFJmzC',
		method:'GET',
		dataType:'json',
		data: {
			limit:9,
			sort:'recent'
		}
	});

// jaysData.display = function (jaysResults, jaysNext, jaysGifs) {
// 	$.when(jaysData.getJaysResults, jaysData.getJaysNext, jaysData.getJaysGifs)
// 		.then(function (jaysResults, jaysNext, jaysGifs) {

export { jaysData, raptorsData, leafsData };
