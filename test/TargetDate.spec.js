const assert = require('assert');
const moment = require('moment');
const TargetDate = require('../src/TargetDate');
describe('TargetDate', () => {
  let targetDate;
  before(() => {
    moment.locale('ja');
  });

  describe('#weekday()', () => {
    it('月曜日の場合は1', () => {
      targetDate = new TargetDate(moment('2018-01-01'));
      assert.equal(targetDate.weekday(), 1);
    });
    it('日曜日の場合は7', () => {
      targetDate = new TargetDate(moment('2018-01-07'));
      assert.equal(targetDate.weekday(), 7);
    });
  });
});
