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

  overlay.addEventListener('click', function(e) {
    console.log(e.target.className == 'overlay show');
    if (e.target.className == 'overlay show') {
       overlay.classList.remove('show');
       modal.classList.remove('show');
     }
  });
});

// setTimeout(function() {
//   overlay.classList.add('show');
//   modal.classList.add('show');
//   overlay.addEventListener('click', function(e) {
//     overlay.classList.remove('show');
//     modal.classList.remove('show');
//   });
// }, 2000);
