import { Component } from "../core/Component"
import { Form } from "./Form"
import { List } from "./List"
import { ListItem } from "./ListItem"

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement("div")
    this.$rootElement.className = "app"

    // разметка заголовока
    const title = document.createElement("h1")
    title.classList = 'total-amount'
    const totalSum = document.createElement("span")
    title.textContent = "Итого: $"
    totalSum.textContent = `${this.state.total}`

    title.appendChild(totalSum)
    this.$rootElement.appendChild(title)

    this.$total = totalSum

    const donateForm = new Form()
    this.$rootElement.appendChild(donateForm.$rootElement)
    const donateList = new List()
    this.$rootElement.appendChild(donateList.$rootElement)
  }

  onItemCreate(amount) {
    // ...
  }
}
