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

  describe('#isAM()', () => {
    it('0時のときは午前中になる', () => {
      targetDate = new TargetDate(moment('2018-01-01 00:00:00'));
      assert.ok(targetDate.isAM());
    });
    it('11時59分59秒のときは午前中になる', () => {
      targetDate = new TargetDate(moment('2018-01-01 11:59:59'));
      assert.ok(targetDate.isAM());
    });
    it('12時00分00秒のときは午後になる', () => {
      targetDate = new TargetDate(moment('2018-01-01 12:00:00'));
      assert.equal(targetDate.isAM(), false);
    });
  });

  describe('#date()', () => {
    it('午前中の場合は対象日は現在日になる', () => {
      targetDate = new TargetDate(moment('2018-01-01 11:00:00'));
      assert.ok(targetDate.date.isSame(moment('2018-01-01 11:00:00')));
    });
    it('午後の場合は対象日は翌日になる', () => {
      targetDate = new TargetDate(moment('2018-01-01 12:00:00'));
      assert.ok(targetDate.date.isSame(moment('2018-01-02 12:00:00')));
    });
  });
});
