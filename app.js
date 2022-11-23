const inputName = document.querySelector('.card__form--name')
const cardName = document.querySelector('.card__name')
const inputCvv = document.querySelector('.card__form--cvv')
const cardCvv = document.querySelector('.card__cvv')
const inputNumber = document.querySelector('.card__form--number')
const cardNumber = document.querySelector('.card__number')
const inputMonth = document.querySelector('.card__form--month')
const cardMonth = document.querySelector('.card__month')
const inputYear = document.querySelector('.card__form--year')
const cardYear = document.querySelector('.card__year')
const submitBtn = document.querySelector('.card__button--submit')
const completedSection = document.querySelector('.card__completed')
const formSection = document.querySelector('.card__form')
const resetBtn = document.querySelector('.card__button--continue') 


inputName.addEventListener('keyup', function (e) {
  cardName.innerText = e.target.value
})
inputNumber.addEventListener('keyup', function (e) {
  cardNumber.innerText = (e.target.value).toString().replace(/\d{4}(?=.)/g, "$& ")
})
inputMonth.addEventListener('keyup', function (e) {
  cardMonth.innerText = e.target.value
})
inputYear.addEventListener('keyup', function (e) {
  cardYear.innerText = e.target.value
})
inputCvv.addEventListener('keyup', function (e) {
  cardCvv.innerText = e.target.value
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  formSection.classList.add('hidden')
  formSection.setAttribute('aria-hidden', 'true')
  completedSection.classList.remove('hidden')
  completedSection.removeAttribute('aria-hidden')
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  completedSection.classList.add('hidden')
  completedSection.setAttribute('aria-hidden', 'true')
  formSection.classList.remove('hidden')
  formSection.removeAttribute('aria-hidden')
  formSection.reset()
})
