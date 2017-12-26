const moment = require('moment');
const googlehome = require('google-home-notifier');
const language = 'ja';

var time = moment().format('YYYY-MM-DD');
notify(time);

function notify(message) {
  googlehome.device('Google-Home', language);
  googlehome.notify(message, function(res) {
    console.log(res);
  });
}
