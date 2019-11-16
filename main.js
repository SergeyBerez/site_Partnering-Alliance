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
    if (e.target.className == 'span') {
      overlay.classList.remove('show');
      modal.classList.remove('show');
      document.querySelector('.span').remove();
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

document.addEventListener('', function(e) {
  console.log(`1 высота окна ${document.documentElement.clientHeight} `);
  console.log(
    `2 высота всего документа ${document.documentElement.scrollHeight}`,
  );
  console.log(`3 текущая прокрутка окна ${document.documentElement.scrollTop}`);
  // лучше пользовать этим методом
  console.log(`3 текущая прокрутка окна ${window.pageYOffset}`);
  //прокрутить окно на оперделенное px число вниз
  //window.scrollTo(0, 500);
  //прокрутить окно к элементу
  //window.scrollTo(0, partner.offsetTop);

  //получем где находится елемент
  console.log(`4 элемент  partner находится ${partner.offsetTop}`);
  //плучаем родителя  только нужно указать ему позишион relative
  console.log(partner.offsetParent);
  // координати где был клик
  console.log('5 собитие мыши относительно документа  ' + e.pageY);
  console.log(' 6 собитие мыши относительно елемента  ' + e.offsetY);
});
// document.addEventListener('mousemove', function (e) {
//   // console.log(e.offsetY);
//   // console.log(e.offsetX);
//   //иплучаем элемнте где он находтся относительно окна
//   console.log(was.getBoundingClientRect().top);
// });

// function createMes(e) {
//   let coordTop = e.pageY;
//   let coordLeft = e.pageX;

//   let div = document.createElement('span');
//   div.classList.add('span');
//   div.style.top = coordTop + 'px';
//   div.style.left = coordLeft + 'px';
//   console.log(div);
//   div.textContent = 'close';
//   document.body.before(div);
//   // body
// }
