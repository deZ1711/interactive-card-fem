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
const errorName = document.querySelector('.js-errorname')
const errorNumber = document.querySelector('.js-errornumber')
const errorDate = document.querySelector('.js-errordate')
const errorCvv = document.querySelector('.js-errorcvv')
let nameOk = false
let numberOk = false
let monthOk = false
let yearOk = false
let cvvOk = false


inputName.addEventListener('input', function (e) {

})

inputNumber.addEventListener('input', function (e) {
})

inputMonth.addEventListener('input', function (e) {
})

inputYear.addEventListener('input', function (e) {
})

inputCvv.addEventListener('input', function (e) {
})

submitBtn.addEventListener('click', (e) => {
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  completedSection.classList.add('hidden')
  completedSection.setAttribute('aria-hidden', 'true')
  formSection.classList.remove('hidden')
  formSection.removeAttribute('aria-hidden')
  cardName.innerText = "Jane Appleseed"
  cardNumber.innerText = "1234 5678 9123 0000"
  cardMonth.innerText = "00"
  cardYear.innerText = "00"
  cardCvv.innerText = "000"
  formSection.reset()
})
