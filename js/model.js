import { getJson } from './helper.js';
// import { isEmpty } from 'lodash-es';
// import { isNil } from 'lodash-es';
import {
  apiUrl,
  detailUrl,
  screenshotsUrl,
  similarUrl,
  searchQuery,
} from './config.js';

export const state = {
  bookmark: [],
  next: {},
  list: [],
  gamedata: {},
  search: {
    next: {},
    query: '',
    results: [],
  },
};

export const loadGameList = async function (page) {
  try {
    const data = await getJson(`${apiUrl}${page}`);
    console.log(data);
    state.next = data.next;
    state.list = data.results.map(gamedata => {
      return {
        id: gamedata.id,
        title: gamedata.name,
        image: gamedata.background_image,
        score: gamedata.metacritic,
        platforms: gamedata.parent_platforms,
        genres: gamedata.genres,
        release: gamedata.released,
        tag: gamedata.tags,
        playtime: gamedata.playtime,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadGameDetail = async function (id) {
  try {
    const data = await Promise.all([
      getJson(screenshotsUrl(id)),
      getJson(detailUrl(id)),
      getJson(similarUrl(id)),
    ]);
    console.log(data);
    state.gamedata = {
      id: data[1].id,
      achievements: data[1].achievements_count,
      name: data[1].name,
      description: data[1].description,
      background1: data[1].background_image,
      background2: data[1].background_image_additional,
      developers: data[1].developers,
      genres: data[1].genres,
      score: data[1].metacritic,
      platforms: data[1].platforms,
      ratings: data[1].ratings,
      rating: data[1].rating,
      ratingTop: data[1].rating_top,
      released: data[1].released,
      stores: data[1].stores,
      tags: data[1].tags,
      website: data[1].website,
      updated: data[1].updated,
      screenshots: data[0].results,
      similargame: data[2].results,
    };
    console.log(state.gamedata);
  } catch (err) {
    throw err;
  }
};

export const loadSearch = async function (query) {
  try {
    const data = await getJson(searchQuery(query));
    console.log(data);
    state.search.next = data.next;
    state.search.results = data.results.map(gamedata => {
      return {
        id: gamedata.id,
        title: gamedata.name,
        image: gamedata.background_image,
        score: gamedata.metacritic,
        platforms: gamedata.parent_platforms,
        genres: gamedata.genres,
        release: gamedata.released,
        tag: gamedata.tags,
        playtime: gamedata.playtime,
      };
    });
    console.log(state.search.next);
  } catch (err) {
    throw err;
  }
};

export const bookmark = function (game) {
  state.bookmark.push(game);
  if (game.id === state.gamedata.id) state.gamedata.bookmarked = true;
  // localStorage.setItem('bookmarks', JSON.stringify(state.bookmark));
};
