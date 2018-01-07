const CollectionDayNotifier = require('./src/CollectionDayNotifier');
const TargetDate = require('./src/TargetDate');
const moment = require('moment');
moment.locale('ja');
const notifier = new CollectionDayNotifier(new TargetDate(moment()));
notifier.notify();
