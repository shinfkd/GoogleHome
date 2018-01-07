const Notifier = require('./Notifier');
class CollectionDayNotifier extends Notifier {
  constructor(targetDate) {
    super();
    this.targetDate = targetDate;
    this.collectionDay = require('./CollectionDay.json');
  }

  notify() {
    const dateMessage = this.targetDate.isAM() ? '今日は' : '明日は';
    const message = this.getMessage(this.collectionDay, this.targetDate.weekday());

    if (message === undefined) {
      return;
    }

    super.notify(dateMessage + message + 'です。');
  }

  getMessage(map, key) {
    let message = map[key];
    if (message instanceof Object) {
      return this.getMessage(message, this.targetDate.weekdayOrdinal());
    }
    if (message !== undefined) {
      return message;
    }
  }
}
module.exports = CollectionDayNotifier;
