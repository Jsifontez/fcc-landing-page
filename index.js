const $header = document.getElementById('header')
const $menu = document.getElementById('nav-bar')
const $menuButton = document.getElementById('icon-menu')

$menuButton.addEventListener('click', displayMenu)

function displayMenu (ev) {
  $header.classList.toggle('active')
  $menu.classList.toggle('active')
}

function showMenu (ev) {
  $header.classList.add('active')
  $menu.classList.add('active')
}

function hideMenu (ev) {
  $header.classList.remove('active')
  $menu.classList.remove('active')
}

const $body = document.body
var gestos = new Hammer($body);
gestos.on('swipeleft', showMenu);
gestos.on('swiperight', hideMenu);