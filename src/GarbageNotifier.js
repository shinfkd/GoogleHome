const Notifier = require('./Notifier');
class GarbageNotifier extends Notifier {
  constructor() {
    super();
    this.moment = require('moment');
  }

  getCurrentWeekday() {
    return this.moment().format('E');
  }
}
module.exports = GarbageNotifier;
