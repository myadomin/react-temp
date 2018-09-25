import { observable, action } from 'mobx';

export class visibleFilterStore {
  @observable visibleFilter = 'All';

  @action setVisibleFilter (type) {
    this.visibleFilter = type
  }
}

export default new visibleFilterStore();
