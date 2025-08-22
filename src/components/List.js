import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    // ...
  }

  addItem(item) {
    // ...
  }

  deleteItem(item) {
    
  }
}