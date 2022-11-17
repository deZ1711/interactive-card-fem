const cardCvv = document.querySelector('.card__cvv')
const cardNumber = document.querySelector('.card__number')
const cardName = document.querySelector('.card__name')
const cardMonth = document.querySelector('.card__month')
const cardYear = document.querySelector('.card__year')

const inputName = document.querySelector('.card__form--name')
const inputNumber = document.querySelector('.card__form--number')
const inputMonth = document.querySelector('.card__form--month')
const inputYear = document.querySelector('.card__form--year')
const inputCvv = document.querySelector('.card__form--cvv')


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