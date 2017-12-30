class Notifier {
  constructor() {
    this.notifier = require('google-home-notifier');
    this.notifier.device('Google-Home', 'ja');
  }

  notify(message) {
    console.log(message);
    this.notifier.notify(message, (res) => {
      console.log(res);
    });
  }
}
module.exports = Notifier;
