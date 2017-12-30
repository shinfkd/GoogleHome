const Notifier = require('./Notifier');
class GarbageNotifier extends Notifier {

  constructor() {
    super();
    this.moment = require('moment');
    this.moment.locale('ja');
    this.garbageDays = {
      1: '燃えるゴミの日',
      2: '資源ゴミの日',
      4: '燃えるゴミの日',
      5: {1: '不燃ゴミの日', 3: '不燃ゴミの日'}
    }
  }

  weekday() {
    return this.moment().format('E');
  }

  weekdayOrdinal() {
    const day = this.moment().format('D');
    return Math.trunc((day / 7) + 0.9);
  }

  garbageNotify() {
    const message = this.getMessage(this.garbageDays, this.weekday());
    if (message !== undefined) {
      this.notify('今日は' + message + 'です。');
    }
  }

  getMessage(map, key) {
    let message = map[key];
    if (message instanceof Object) {
      return this.getMessage(message, this.weekdayOrdinal());
    }
    if (message !== undefined) {
      return message;
    }
  }
}
module.exports = GarbageNotifier;
