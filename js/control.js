import * as model from './model.js';
import Gameview from './view.js';
// -----------------------------------------

// ---------------------------------
const nextpage = document.querySelector('.next');
let num = 1;
let page = `page=${num}`;
const thenextPage = function () {
  // mainpage.classList.remove('animation');
  // mainpage.classList.add('animation');
  num++;
  console.log(num);
  let newpage = `page=${num}`;
  // console.log(newpage);
  showGameList(newpage);
};
nextpage.addEventListener('click', thenextPage);
// ----------------------------------------

// ----------------------------------------------
const showGameList = async function (page) {
  try {
    if (!page) return;
    Gameview.loadingSpinner();
    await model.loadGameList(page);
    Gameview.render(model.state.list);
    // -----------------------------------------------
  } catch (err) {
    Gameview.renderErrror(err);
  }
};
showGameList(page);
// ------------------------------------------------

const id = window.location.hash.slice(1);
console.log(id);

const showGamedetail = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    Gameview.loadingSpinner();
    await model.loadGameDetail(id);
    console.log(model.state.gamedata);
    Gameview.render1(model.state.gamedata);
    document.querySelector('.search').style.display = 'none';

    // ----------------------------
    const thumbsimage = document.querySelectorAll('.thumbsnail');
    const main = document.querySelector('.main-image');
    // let count = 0;
    console.log(thumbsimage[1]);
    for (let i = 0; i < thumbsimage.length; i++) {
      let img = thumbsimage[i];

      img.addEventListener('click', function () {
        main.src = this.src;
      });
    }

    // -----------------------------
  } catch (err) {
    Gameview.renderErrror(err);
  }
};
// --------------------------------------------
const searchResults = async function () {
  try {
    const query = document.querySelector('.inputValue').value;
    // console.log(query);
    if (!query) return;
    await model.loadSearch(query);
    Gameview.render(model.state.search.results);
  } catch (err) {
    Gameview.renderErrror(err);
  }
};

document.querySelector('.search').addEventListener('submit', function (e) {
  e.preventDefault();
  searchResults();
});

window.addEventListener('hashchange', showGamedetail);

const backToHome = document.getElementById('home');
const home = function () {
  window.location.hash = '';
  location.reload();
};

backToHome.addEventListener('click', home);
// // ----------------------------------------------
// const addBookmark = function () {
//   model.bookmark(model.state.gamedata);
//   console.log(model.state.gamedata);
// };

// -------------------------
