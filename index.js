const $header = document.getElementById('header')
const $menu = document.getElementById('nav-bar')
const $menuButton = document.getElementById('icon-menu')

$menuButton.addEventListener('click', displayMenu)

function displayMenu (ev) {
  console.log($header.classList)
  $header.classList.toggle('active')
  $menu.classList.toggle('active')
}