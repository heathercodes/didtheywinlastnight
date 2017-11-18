import axios from "axios";
import moment from "moment";
moment().format();
const yesterday = moment()
  .add(-1, "days")
  .format("YYYYMMDD");

// this is where all the variables holding my auth stuff would be.

export const gameCheck = (url, checkGame) => {
  axios({
    auth: {
      username,
      password
    },
    baseURL: sportBaseURL,
    url: url,
    params: {
      fordate: yesterday
    }
  })
    .then((response) => {
      checkGame(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const scoreCheck = (
  url,
  won,
  wonAlt,
  lost,
  lostAlt,
  answerComment,
  displayResult
) => {
  axios({
    auth: {
      username,
      password
    },
    baseURL: sportBaseURL,
    url: url,
    params: {
      fordate: yesterday
    }
  })
    .then((response) => {
      displayResult(response.data, won, wonAlt, lost, lostAlt, answerComment);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const scheduleCheck = (url, checkNext) => {
  axios({
    auth: {
      username,
      password
    },
    baseURL: sportBaseURL,
    url: url
  })
    .then((response) => {
      checkNext(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const giphyCheck = (query, assignGifs) => {
  axios({
    baseURL: giphyBaseURL,
    params: {
      q: query,
      limit: 9,
      offset: 0,
      rating: "G",
      lang: "en",
      api_key: giphyAPI
    }
  })
    .then((response) => {
      assignGifs(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
