class TargetDate {
  constructor(moment) {
    this.currentDate = moment;
  }

  weekday() {
    return this.date.format('E');
  }

  weekdayOrdinal() {
    const day = this.date.format('D');
    return Math.trunc((day / 7) + 0.9);
  }

  isAM() {
    return this.currentDate.format('H') < 12;
  }

  get date() {
    return this.isAM() ? this.currentDate : this.currentDate.add(1, 'd');
  }
}
module.exports = TargetDate;
