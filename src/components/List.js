import { Component } from "../core/Component"

export class List extends Component {
  setup() {
    // разметка списка с донатами
    this.$rootElement = document.createElement("div")
    this.$rootElement.className = "donates-container"

    const titleDonates = document.createElement("h2")
    titleDonates.classList = "donates-container__title"
    titleDonates.textContent = "Список донатов"

    const donatesList = document.createElement("div")
    donatesList.classList = "donates-container__donates"

    this.$rootElement.appendChild(titleDonates)
    this.$rootElement.appendChild(donatesList)

    this.$donatesList = donatesList
  }

  addItem(item) {
    this.$donatesList.appendChild(item.$rootElement) 
  }

  removeItem(item) {
    this.$donatesList.removeChild(item.$rootElement)
  }
}
