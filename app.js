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
  cardName.innerText = e.target.value
  if (!inputName.value || !inputName.validity.valid){
    errorName.innerText = "Entre votre nom et prénom"
  } else if (inputName.validity.valid) {
    errorName.innerText = ""
  }
})

inputNumber.addEventListener('input', function (e) {
  cardNumber.innerText = e.target.value.toString().replace(/\d{4}(?=.)/g, "$& ")
  if (!inputNumber.value || !inputNumber.validity.valid) {
    errorNumber.innerText = "Entrez les 16 chiffres de votre carte bancaire"
  } else if (inputNumber.validity.valid) {
    errorNumber.innerText = ""
  }
})

inputMonth.addEventListener('input', function (e) {
  cardMonth.innerText = e.target.value
  if (!inputMonth.value) {
    errorDate.innerText = "Ne peut être vide"
  } else if (!inputMonth.validity.valid) {
    errorDate.innerText = "Entrez mois et année de fin de validité de votre carte bancaire"
  } else if (inputMonth.validity.valid) {
    errorDate.innerText = ""
  }
})

inputYear.addEventListener('input', function (e) {
  cardYear.innerText = e.target.value
  if (!inputYear.value || !inputYear.validity.valid) {
    errorDate.innerText = "Entrez mois et année de fin de validité de votre carte bancaire"
  } else if (inputYear.validity.valid) {
    errorDate.innerText = ""
  }
})

inputCvv.addEventListener('input', function (e) {
  errorCvv.innerText = e.target.value
  if (!inputCvv.value || !inputCvv.validity.valid) {
    errorCvv.innerText = "Entrez les 3 chiffres au dos de votre carte bancaire"
  } else if (inputCvv.validity.valid) {
    errorCvv.innerText = ""
  }
})

submitBtn.addEventListener('click', (e) => {
  if (!inputName.validity.valid || !inputNumber.validity.valid || !inputMonth.validity.valid || !inputYear.validity.valid || !inputCvv.validity.valid) {
  e.preventDefault()
  } else if (inputName.validity.valid && inputNumber.validity.valid && inputMonth.validity.valid && inputYear.validity.valid && inputCvv.validity.valid) {
  e.preventDefault()
  formSection.classList.add('hidden')
  formSection.setAttribute('aria-hidden', 'true')
  completedSection.classList.remove('hidden')
  completedSection.removeAttribute('aria-hidden')
  }
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
