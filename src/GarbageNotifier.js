const Notifier = require('./Notifier');
class GarbageNotifier extends Notifier {

  constructor() {
    super();
    this.moment = require('moment');
    this.moment.locale('ja');
    this.currentDate = this.moment();
    if (this.isPM()) {
      this.targetDate = this.currentDate.add(1, 'd');
    } else {
      this.targetDate = this.currentDate;
    }

    this.garbageDays = {
      1: '燃えるゴミの日',
      2: '資源ゴミの日',
      4: '燃えるゴミの日',
      5: {1: '不燃ゴミの日', 3: '不燃ゴミの日'}
    }
  }

  weekday() {
    return this.targetDate.format('E');
  }

  weekdayOrdinal() {
    const day = this.targetDate.format('D');
    return Math.trunc((day / 7) + 0.9);
  }

  garbageNotify() {
    const message = this.getMessage(this.garbageDays, this.weekday());
    if (message === undefined) {
      return;
    }
    const dateMessage = this.isPM() ? '明日は' : '今日は'; 
    this.notify(dateMessage + message + 'です。');
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

  isPM() {
    return this.currentDate.format('H') > 12;
  }
}
module.exports = GarbageNotifier;
