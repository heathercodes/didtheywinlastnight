import $ from 'jquery';
import axios from 'axios';

// Raptors Data Begins
const raptorsData = {};


raptorsData.getRaptorsGifs =
	$.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=toronto+raptors&api_key=dc6zaTOxFJmzC',
		method:'GET',
		dataType:'json',
		params: {
			limit:9,
			sort:'recent'
		}
	});


// Leafs Data Begins
const leafsData = {};


leafsData.getLeafsGifs = $.ajax({
		url:'http://api.giphy.com/v1/gifs/search?q=toronto+maple+leafs&api_key=dc6zaTOxFJmzC',
		method:'GET',
		dataType:'json',
		data: {
			limit:9,
			sort:'recent'
		}
});

// Jay's data below
const jaysData = {};

// jaysData.getJaysGifs =
// 	axios({
// 		url:'http://api.giphy.com/v1/gifs/search?q=toronto+blue+jays&api_key=dc6zaTOxFJmzC',
// 		method:'GET',
// 		responseType:'json',
// 		params: {
// 			limit:9,
// 			sort:'recent'
// 		}
// 	});

export { jaysData, raptorsData, leafsData };
