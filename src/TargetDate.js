class TargetDate {
  constructor(moment) {
    this.currentDate = moment;
  }

  weekday() {
    return this.date.isoWeekday();
  }

  weekdayOrdinal() {
    const day = this.date.date();
    return Math.trunc((day + 6) / 7);
  }

  isAM() {
    return this.currentDate.hour() < 12;
  }

  get date() {
    return this.isAM() ? this.currentDate : this.currentDate.add(1, 'd');
  }
}
module.exports = TargetDate;
