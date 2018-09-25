import { observable, action } from 'mobx';

export class todosStore {
  @observable addInputValue = ''
  @observable todoList = []

  @action changeAddInputValue (value) {
    this.addInputValue = value
  }
  @action addTodo (value) {
    this.todoList.push({
      text: value,
      isCompeleted: false
    })
    this.addInputValue = ''
  }
  @action toggleTodos (e, index) {
    this.todoList[index].isCompeleted = !this.todoList[index].isCompeleted
  }
}

export default new todosStore();
