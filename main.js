$('.a').on('click', function(e) {
  e.preventDefault();

  var atr = $(this).attr('href');

  var position = $(atr).offset().top;

  $('html,body').animate({ scrollTop: position }, 1000);
});

// $(document).on('click', function () {
//   console.log(1);
//   $(document).scrollTop(500);
// });

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.features_title3');

let login = document.querySelector('[href="#login"]');
login.addEventListener('click', function(e) {
  overlay.classList.add('show');
  modal.classList.add('show');
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
        div.textContent = 'close';
        document.body.before(div);
      }
    },
    { once: true },
  );

  document.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.className == 'span' || e.target.className == 'overlay show') {
      overlay.classList.remove('show');
      modal.classList.remove('show');
      document.querySelector('.span').remove();
    }
  });
});

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
