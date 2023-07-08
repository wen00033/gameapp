const thumbsimage = document.querySelectorAll('.thumbsnail');
const main = document.querySelector('.main-image');
let count = 0;

for (let i = 0; i < thumbsimage.length; i++) {
  let img = thumbsimage[i];
  console.log(img);
  img.addEventListener('click', function () {
    main.src = this.src;
  });
}
