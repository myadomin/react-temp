import { observable, action } from 'mobx'

export class WsStore {
  @observable messageList = []

  // @action increment () {
  //   this.num = this.num + 1
  // }
}

export default new WsStore()
