const CollectionDayNotifier = require('./src/CollectionDayNotifier');
const notifier = new CollectionDayNotifier();
const weekday = notifier.weekday();
notifier.collectionDayNotify();
