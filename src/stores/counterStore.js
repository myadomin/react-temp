import { observable, action } from 'mobx'

export class CounterStore {
  @observable num = 0

  @action increment () {
    this.num = this.num + 1
  }
}

export default new CounterStore()
