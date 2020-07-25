const mainNav = document.querySelector('.main-nav__hideaway')
const hamburger = document.querySelector('.hamburger')
console.log('hello')

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('is-active')
  mainNav.classList.toggle('exposed')
})
