const GarbageNotifier = require('./src/GarbageNotifier');
const notifier = new GarbageNotifier();
const weekday = notifier.weekday();
notifier.garbageNotify();
