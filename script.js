// Menu toggle

let show = true

const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menu.classList.toggle('on', show)

  show = !show
})

// Back to top Button
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  backToTop()
})

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home1, .title, .image1,
  #home2, .image2, .text, #services, .service-item, #plans, .plan-item
  `,
  { interval: 100 }
)
