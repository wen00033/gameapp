import * as model from "./model.js";

const listContainer = document.querySelector(".game-list");
const background = document.querySelector(".container");
let page = `page=1`;

const svg = function (el) {
  if (el === "pc") {
    return '<img class="svg" src="svg/Window.svg" alt="console" />';
  }
  if (el === "playstation") {
    return '<img class="svg" src="svg/Playstation.svg" alt="console" />';
  }
  if (el === "xbox") {
    return '<img class="svg" src="svg/Xbox.svg" alt="console" />';
  }
};

const showGame = async function (page) {
  try {
    await model.loadGameList(page);
    model.state.search.result.map((el) => RenderGameList(el));
  } catch (err) {
    console.error(err);
  }
};
showGame(page);

const RenderGameList = function (gamedata) {
  const markup = `
     <div class="component">
            <div class="container">
              <div class="overlay">
                <div class="console">
                ${gamedata.platforms
                  .map((el) => svg(el.platform.slug))
                  .join("")}
                </div>
                <div class="score"><p>${gamedata.score}</p></div>
              </div>
              <img class="background" src="${
                gamedata.image
              }" alt="background" />
              <div class="gametitle">
              <h3 data-id=${gamedata.id}>${gamedata.title}</h3>
              </div>             
            </div>
            <div class="game-description">
            <div class="game-release-date">
                <span>Title:</span>
                <h3>${gamedata.title}</h3>
              </div>
              <div class="game-release-date">
                <span>release date:</span>
                <p>${gamedata.release}</p>
              </div>
              <div class="game-genre">
                <span>genre:</span>
                <div class="genre-container">${gamedata.genres
                  .map((el) => `<p class="genre">${el.name}</p>`)
                  .join("")}</div>
              </div>
              <div class="playtime">
                <span>playtime:</span>
                <p class="playtime-text">${gamedata.playtime} hours</p>
              </div>
            </div>
          </div>
     `;
  //   listContainer.innerHTML = "";
  listContainer.insertAdjacentHTML("afterbegin", markup);
};

// getJson();
