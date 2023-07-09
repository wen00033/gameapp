export const apiUrl = `https://api.rawg.io/api/games?key=e9c34ba2efe342eca83f731ac1496ea4&`;
export const detailUrl = function (id) {
  return `https://api.rawg.io/api/games/${id}?key=e9c34ba2efe342eca83f731ac1496ea4`;
};
export const screenshotsUrl = function (id) {
  return `https://api.rawg.io/api/games/${id}/screenshots?key=e9c34ba2efe342eca83f731ac1496ea4`;
};
export const similarUrl = function (id) {
  return `https://api.rawg.io/api/games/${id}/game-series?key=e9c34ba2efe342eca83f731ac1496ea4`;
};
export const searchQuery = function (query) {
  return `https://api.rawg.io/api/games?search=${query}&key=e9c34ba2efe342eca83f731ac1496ea4`;
};
