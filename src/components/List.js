import { Component } from "../core/Component"
import { ListItem } from "./ListItem"

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div")
    this.$rootElement.className = "donates-container"

    const titleDonates = document.createElement("h2")
    titleDonates.classList = "donates-container__title"
    titleDonates.textContent = "Список донатов"

    const donatesList = document.createElement("div")
    donatesList.classList = "donates-container__donates"

    this.$rootElement.append(titleDonates)
    this.$rootElement.append(donatesList)

    this.$donatesList = donatesList
  }

  addItem(item) {
    // ...
  }

  deleteItem(item) {}
}
