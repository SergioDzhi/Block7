const modalCall = document.querySelector('.modal-call')
const headerCall = document.querySelector('.header__call')
const sidebarCall = document.querySelector('.sidebar__call')
const closeCall = modalCall.querySelector('.close__call')

//функция показать окно обратная связь
function openWindowCall() {
  modalCall.classList.add('show')
}

//функция закрыть попап обратная связь
function closeWindowCall() {
  modalCall.classList.remove('show')
}

//функция закрыть попап обратная связь по области
function handleCheckCall(evt) {
  if (
    evt.target.classList.contains('show') &&
    !evt.target.closest('.modal__container')
  ) {
    closeWindowCall()
  }
}

headerCall.addEventListener('click', openWindowCall)
sidebarCall.addEventListener('click', openWindowCall)
closeCall.addEventListener('click', closeWindowCall)
modalCall.addEventListener('click', handleCheckCall)
