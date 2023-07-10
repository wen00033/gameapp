class Gameview {
  #parentElement = document.querySelector('.game-list');
  #secondparentElement = document.querySelector('.change-page');
  #data;
  #errorMessage = 'Sorry we can not find the game. Please try another time!';
  render(data) {
    this.#data = data;
    const markup = this.#gameListView();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  render1(data) {
    this.#data = data;
    console.log(data);
    const markup = this.#gamedetail(data);
    this.#clear1();
    this.#secondparentElement.insertAdjacentHTML('beforeend', markup);
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }
  #clear1() {
    this.#secondparentElement.innerHTML = '';
  }

  loadingSpinner() {
    const markup = `<div class="spinner-container">
   <img class="svg spinner"  src="svg/Spinner.svg" alt="loading" />
</div>`;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderErrror(message = this.#errorMessage) {
    const markup = `<div class="error">  
   <h3>${message}</h3> 
</div>`;
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #gameListView() {
    console.log(this.#data);
    return this.#data.map(this.#gameListMarkupPreview).join('');
  }

  #gameListMarkupPreview(data) {
    const svg = function (el) {
      if (el === 'pc') {
        return '<img class="svg" src="svg/Window.svg" alt="console" />';
      }
      if (el === 'playstation') {
        return '<img class="svg" src="svg/Playstation.svg" alt="console" />';
      }
      if (el === 'xbox') {
        return '<img class="svg" src="svg/Xbox.svg" alt="console" />';
      }
      if (el === 'linux') {
        return '<img class="svg" src="svg/Linux.svg" alt="console" />';
      }
      if (el === 'mac') {
        return '<img class="svg" src="svg/apple.svg" alt="console" />';
      }
      if (el === 'nintendo') {
        return '<img class="svg" src="svg/Nintendo.svg" alt="console" />';
      }
    };

    return `
    <div id="component" class="component">
    <div class="container">
      <div class="overlay">
        <div class="console">
        ${data.platforms.map(el => svg(el.platform.slug)).join('')}
        </div>
        <div class="score"><p>${data.score}</p></div>
      </div>
      <img class="background-image"
       src="${data.image}" alt="background" />
      <div class="gametitle">
      <h3 data-id=${data.id}>${data.title}</h3>
      </div>             
    </div>
    <div class="game-description">
      <div class="game-title">
        <span>Title:</span>
        <a href="#${data.id}">${data.title}</a>
      </div>
      <div class="game-release-date">
        <span>released date:</span>
        <p>${data.release}</p>
      </div>
      <div class="game-genre">
        <span>genre:</span>
        <div class="genre-container">${data.genres
          .map(el => `<p class="genre">${el.name}</p>`)
          .join('')}</div>
      </div>
      <div class="playtime">
        <span>playtime:</span>
        <p class="playtime-text">${data.playtime} hours</p>
      </div>
    </div>
  </div>
    `;
  }

  addBookmarkHandler(handler) {
    this.#secondparentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.bookmark');
      if (!button) return;
      handler();
    });
  }

  #gamedetail(data) {
    const svg = function (el) {
      if (el === 'pc') {
        return '<img class="svg" src="svg/Window.svg" alt="console" />';
      }
      if (el === 'playstation') {
        return '<img class="svg" src="svg/Playstation.svg" alt="console" />';
      }
      if (el === 'xbox') {
        return '<img class="svg" src="svg/Xbox.svg" alt="console" />';
      }
      if (el === 'linux') {
        return '<img class="svg" src="svg/Linux.svg" alt="console" />';
      }
      if (el === 'mac') {
        return '<img class="svg" src="svg/apple.svg" alt="console" />';
      }
      if (el === 'nintendo') {
        return '<img class="svg" src="svg/Nintendo.svg" alt="console" />';
      }
    };
    return `<div class="game-wrapper">
    <section class="game-background">
      <img
        class="background"
        src=${data.background1}
        alt="image"
      />
      <div class="main-game-content">
      <div class="console">
        ${data.platforms.map(el => svg(el.platform.slug)).join('')}
        </div>
        <h3 class="game-name">${data.name.toUpperCase()}</h3>
        <button class="website"><a href=${data.website}>Gamesite▶️</a></button>
        
      </div>

      <div class="game-score"><p>${data.score}</p></div>
    </section>
    <div class="content-wrapper">
      <section class="game-detail">
      <div class="bookmark-container">
      <button class="bookmark"><img class="svg bookmark-svg" 
      src="svg/${
        data.bookmarked ? 'bookmark-active.svg' : 'bookmark.svg'
      }" alt="bookmark" ></button> 
      </div>
        <div class="developer">
          <span>Developer :</span>
          ${data.developers.map(el => `<p>${el.name}</p>`).join('')}
        </div>
        <div class="release-date">
          <span>Release date:</span>
          <p>${data.released}</p>
        </div>
        <div class="last-updated">
          <span>last updated date:</span>
          <p>${data.updated}</p>
        </div>
        <div class="game-achievement">
          <span>achievement:</span>
          <p>${data.achievements} achievements</p>
        </div>
        <div class="game-main-content">
          <span>description:</span>
          ${data.description}
        </div>
        <div class="platforms">
          <span>Platforms:</span>
          <div>${data.platforms
            .map(el => `<p class="platform">${el.platform.name}</p>`)
            .join('')}</div>
        </div>
        <div class="genre-container">
        <span>genre:</span>
        ${data.genres.map(el => `<p class="genre">${el.name}</p>`).join('')}
        </div>
        <div class="tag-container">
        <span>tag:</span>
        ${data.tags.map(el => `<p class="tag">${el.name}</p>`).join('')}
        </div>
      </section>
      <section>
      <span class="Game-preview">Game preview</span>
        <div class="image-collection">
        <img
        class="main-image"
        src=${data.background2}
        alt="image"
      />
        <div class="thumb-nail">
          ${data.screenshots
            .map(
              el => `<img
          class="thumbsnail"
          src=${el.image}
          alt="image"
        />`
            )
            .join('')}
          </div>
          <div class="similar-game">
    <span>similar-game</span>
        ${data.similargame
          .map(el => `<p data-id='${el.id}' class="similar">${el.name}</p>`)
          .join('')}
        </div>
          </div>
        </div>
      </section>
    </div>
  </div>`;
  }
}

export default new Gameview();
