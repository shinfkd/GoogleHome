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

  describe('#weekdayOrdinal()', () => {
    it('1日は第1曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-01'));
      assert.equal(targetDate.weekdayOrdinal(), 1);
    });
    it('7日は第1曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-08'));
      assert.equal(targetDate.weekdayOrdinal(), 2);
    });
    it('8日は第2曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-08'));
      assert.equal(targetDate.weekdayOrdinal(), 2);
    });
    it('14日は第2曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-14'));
      assert.equal(targetDate.weekdayOrdinal(), 2);
    });
    it('29日は第5曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-29'));
      assert.equal(targetDate.weekdayOrdinal(), 5);
    });
    it('31日は第5曜日になる', () => {
      targetDate = new TargetDate(moment('2018-01-31'));
      assert.equal(targetDate.weekdayOrdinal(), 5);
    });
  });
});
