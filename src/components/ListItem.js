import { Component } from "../core/Component"

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    this.$rootElement = document.createElement("div")
    this.$rootElement.className = "donate-item"
    this.$rootElement.id = this.state.id
    this.$rootElement.textContent = `${this.state.date.toLocaleString()} -  `

    const amountDonat = document.createElement("b")
    amountDonat.textContent = `  $${this.state.amount}`

    const deleteButton = document.createElement("button")
    deleteButton.classList = "delete-button"
    deleteButton.textContent = "Удалить"

    this.$rootElement.appendChild(amountDonat)
    this.$rootElement.appendChild(deleteButton)

    deleteButton.addEventListener("click", this.deleteItem.bind(this))
  }

  deleteItem() {
    this.props.onRemove(this.state.id)
  }
}
