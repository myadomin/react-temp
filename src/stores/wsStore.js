import { observable, action } from 'mobx'

export class WsStore {
  @observable messageList = []
  @observable index = 1

  // @action increment () {
  //   this.num = this.num + 1
  // }
}

export default new WsStore()
