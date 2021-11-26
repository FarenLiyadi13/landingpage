// tombol navbar hape
let navbar = document.querySelector('.navbar');
let btnMenu = document.getElementById('menu-btn');
btnMenu.addEventListener('click', function () {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
});
// tombol keranjang
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};
// tombol search
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
};
window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
};
