let a = document.querySelectorAll('a');
document.addEventListener('click', function(e) {
  //  e.preventDefault()
});
console.log(a);

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.features_title3');
console.log(modal);
let login = document.querySelector('[href="#login"]');
login.addEventListener('click', function(e) {
  overlay.classList.add('show');
  modal.classList.add('show');
  overlay.addEventListener('click', function(e) {
    overlay.classList.remove('show');
    modal.classList.remove('show');
  });
});

setTimeout(function() {
  overlay.classList.add('show');
  modal.classList.add('show');
  overlay.addEventListener('click', function(e) {
    overlay.classList.remove('show');
    modal.classList.remove('show');
  });
}, 2000);