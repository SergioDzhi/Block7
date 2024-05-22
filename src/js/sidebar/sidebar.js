const overlay = document.querySelector('.overlay')
const burgerMenu = document.querySelector('.burger')
const closeSidebar = overlay.querySelector('.close__sidebar')

//функция скрыть-показать бургер меню
function toggleBtnMenu() {
  overlay.classList.toggle('show')
}

//функция закрыть попап сайдбар
function closeWindowSidebar() {
  overlay.classList.remove('show')
}

//функция закрыть бургер меню по области вне меню
function handleCheckSidebar(evt) {
  if (
    evt.target.classList.contains('show') &&
    !evt.target.closest('.sidebar')
  ) {
    closeWindowSidebar()
  }
}

burgerMenu.addEventListener('click', toggleBtnMenu)
closeSidebar.addEventListener('click', closeWindowSidebar)
overlay.addEventListener('click', handleCheckSidebar)
closeSidebar.addEventListener('click', closeWindowSidebar)
