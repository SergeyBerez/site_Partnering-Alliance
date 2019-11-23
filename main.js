$('.a').on('click', function(e) {
  e.preventDefault();

  var atr = $(this).attr('href');

  var positionElement = $(atr).offset().top;

  $('html,body').animate({ scrollTop: positionElement }, 1000);
});

// $(document).on('click', function () {
//   console.log(1);
//   $(document).scrollTop(500);
// });

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.features_title3');

let logins = document.querySelectorAll('[href="#login"]');
//получаем    все логины их 2
for (const element of logins) {
  // вешаем обработчик на логин на который кликнули
  element.addEventListener('click', e => {
    overlay.classList.add('show');
    modal.classList.add('show');

    // вешаем обработчик на наше модальное окно  показываем сообщение можно закрыть окно
    overlay.addEventListener(
      'mouseout',
      function(e) {
        if (e.target.className == 'overlay show') {
          let coordTop = e.pageY;
          let coordLeft = e.pageX;

          let div = document.createElement('span');
          div.classList.add('span');
          div.style.top = coordTop + 'px';
          div.style.left = coordLeft + 'px';
          div.textContent = 'click to close';
          document.body.before(div);
          // console.log(div);
        }
      },
      { once: true },
    );
  });
}
// клик обработчик закрываем модальное окно
document.addEventListener('click', function(e) {
  // console.log(e.target);
  if (e.target.className == 'span' || e.target.className == 'overlay show') {
    overlay.classList.remove('show');
    modal.classList.remove('show');
    document.querySelector('.span').remove();
  }
});

// получаем наши катринки в делаем простой слайд
let arrimg = [
  './img/heder_fon1.png',
  './img/heder_fon2.png',
  './img/heder_fon4.png',
  './img/heder_fon5.png',
];

let bg = document.querySelector('.header-section-bg');
let button = document.querySelector('.btn--active');
let i = 0;
button.addEventListener('click', function(e) {
  bg.style.backgroundImage = `url(${arrimg[i]})`;

  i++;

  if (i >= arrimg.length) {
    i = 0;
  }
});
