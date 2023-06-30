import { getJson } from "./helper.js";
import { apiUrl } from "./config.js";

export const state = {
  gamedata: {},
  search: {
    query: "",
    result: [],
  },
};

export const loadGameList = async function (page) {
  try {
    const data = await getJson(`${apiUrl}${page}`);
    console.log(data);
    state.search.result = data.results.map((gamedata) => {
      return {
        id: gamedata.id,
        title: gamedata.name,
        image: gamedata.background_image,
        score: gamedata.metacritic,
        platforms: gamedata.parent_platforms,
        genres: gamedata.genres,
        release: gamedata.released,
        screenshots: gamedata.short_screenshots,
        store: gamedata.stores,
        tag: gamedata.tags,
        numReviews: gamedata.reviews_count,
        playtime: gamedata.playtime,
      };
    });
    console.log(state.search.result);
  } catch (err) {
    throw err;
  }
};
