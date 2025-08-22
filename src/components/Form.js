import { Component } from "../core/Component"

export class Form extends Component {
  setup(props) {
    this.props = props
    this.state = {
      amount: 0,
    }

    this.$rootElement = document.createElement("form")
    this.$rootElement.className = "donate-form"

    // разметка для поля ввода
    const labelForm = document.createElement("label")
    labelForm.classList = "donate-form__input-label"
    labelForm.textContent = "Введите сумму в $"

    const inputForm = document.createElement("input")
    inputForm.classList = "donate-form__donate-input"
    inputForm.type = "number"
    inputForm.name = "amount"
    inputForm.min = 1
    inputForm.max = 100
    inputForm.required = true

    const buttonForm = document.createElement("button")
    buttonForm.classList = "donate-form__submit-button"
    buttonForm.textContent = "Задонатить"

    this.$input = inputForm
    this.$button = buttonForm

    this.$rootElement.appendChild(labelForm)
    this.$rootElement.appendChild(inputForm)
    this.$rootElement.appendChild(buttonForm)

    // обработчики событий для поля ввода и кнопки отправки доната
    this.$input.addEventListener("input", this.handleInput.bind(this))
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this))
  }

  handleInput(event) {
    this.state.amount = Number(event.target.value)
    this.$button.disabled = !this.isValid ? true : false
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.isValid) {
      this.props.onSubmit(this.state.amount)

      this.state.amount = 0
      this.$input.value = ''
    }
  }

  get isValid() {
    if (this.state.amount >= 1 && this.state.amount <= 100) {
      return true
    } else {
      return false
    }
  }
}
