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


inputName.addEventListener('keyup', function (e) {
  let name = inputName.value;
  let key = e.key;
  let verifName = key.match(/[A-Za-z\s]/);
  if (name.length === 0) {
    errorName.innerText = "Entrez votre nom."
    inputName.classList.add('red')
    nameOk = false
  } else if (verifName) {
    errorName.innerText = ""
    cardName.innerText = e.target.value
    inputName.classList.remove('red')
    nameOk = true
  } else {
    errorName.innerText = "Utilisez seulement des lettres."
    inputName.classList.add('red')
    nameOk = false
  }
})
inputNumber.addEventListener('keyup', function (e) {
  let numbers = inputNumber.value
  let key = e.key
  let verifNumber = key.match(/\d/) 
  if (numbers.length === 0) {
    errorNumber.innerText = "Entrez les 16 chiffres de votre carte de crédit."
    inputNumber.classList.add('red')
    numberOk = false
  } else if (verifNumber) {
    errorNumber.innerText = ""
    cardNumber.innerText = (e.target.value).toString().replace(/\d{4}(?=.)/g, "$& ")
    inputNumber.classList.remove('red')
    if (numbers.length === 16) {
      numberOk = true
    }
  } else {
    errorNumber.innerText = "Utilisez seulement des chiffres."
    inputNumber.classList.add('red')
    numberOk = false
  }
})
inputMonth.addEventListener('keyup', function (e) {
  let month = inputMonth.value
  let key = e.key
  let verifMonth = key.match(/\d/)
  if (month.length === 0) {
    errorDate.innerText = "Entrez la date d'expiration de votre carte de crédit."
    cardMonth.classList.add('red')
    monthOk = false
  } else if (verifMonth) {
    errorDate.innerText = ""
    cardMonth.innerText = e.target.value
    inputMonth.classList.remove('red')
    monthOk = true
  } else {
    errorDate.innerText = "Utilisez seulement des chiffres."
    inputMonth.classList.add('red')
    monthOk = false
  }
})
inputYear.addEventListener('keyup', function (e) {
  let year = inputYear.value
  let key = e.key
  let verifYear = key.match(/\d/)
  if (year.length === 0) {
    errorDate.innerText = "Entrez la date d'expiration de votre carte de crédit."
    cardYear.classList.add('red')
    yearOk = false
  } else if (verifYear) {
    errorDate.innerText = ""
    cardYear.innerText = e.target.value
    inputYear.classList.remove('red')
    yearOk = true
  } else {
    errorDate.innerText = "Utilisez seulement des chiffres."
    inputYear.classList.add('red')
    yearOk = false
  }
})
inputCvv.addEventListener('keyup', function (e) {
  let cvv = inputCvv.value
  let key = e.key
  let verifCvv = key.match(/\d/)
  if (cvv.length === 0) {
    errorCvv.innerText = "Entrez les CVV de votre carte de crédit."
    cardCvv.classList.add('red')
    cvvOk = false
  } else if (verifCvv) {
    errorCvv.innerText = ""
    cardCvv.innerText = e.target.value
    inputCvv.classList.remove('red')
    cvvOk = true
  } else {
    errorCvv.innerText = "Utilisez seulement des chiffres."
    inputCvv.classList.add('red')
    cvvOk = false
  }
})

submitBtn.addEventListener('click', (e) => {
  if (nameOk && numberOk && monthOk && yearOk && cvvOk ) {
    e.preventDefault()
    formSection.classList.add('hidden')
    formSection.setAttribute('aria-hidden', 'true')
    completedSection.classList.remove('hidden')
    completedSection.removeAttribute('aria-hidden')
  } else {
    e.preventDefault()
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
