import { Component } from "../core/Component"
import { Form } from "./Form"
import { List } from "./List"
import { ListItem } from "./ListItem"

export class App extends Component {
  setup() {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement("div")
    this.$rootElement.className = "app"

    // разметка заголовока
    const title = document.createElement("h1")
    title.classList = "total-amount"
    const totalSum = document.createElement("span")
    title.textContent = "Итого: $"
    totalSum.textContent = `${this.state.total}`

    title.appendChild(totalSum)
    this.$rootElement.appendChild(title)

    this.$total = totalSum

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    })
    this.$rootElement.appendChild(donateForm.$rootElement)

    const donateList = new List({})
    this.$rootElement.appendChild(donateList.$rootElement)

    this.donateList = donateList
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onRemove: this.removeDonate.bind(this),
    })

    this.state.donates.push(item)
    this.donateList.addItem(item)

    this.state.total += amount
    this.$total.textContent = `${this.state.total}`
  }

  removeDonate(id) {
    const item = this.state.donates.find((d) => d.state.id === id)

    this.state.donates = this.state.donates.filter((d) => d.state.id !== id)
    this.donateList.removeItem(item)

    this.state.total -= item.state.amount
    this.$total.textContent = `${this.state.total}`
  }
}
