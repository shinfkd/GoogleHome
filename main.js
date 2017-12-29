const GarbageNotifier = require('./GarbageNotifier');
const notifier = new GarbageNotifier();
const weekday = notifier.getCurrentWeekday();
notifier.notify(weekday);
