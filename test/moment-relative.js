var moment = require('..');
var assert = require('assert');

describe('moment-relative', function () {
  describe('.relative', function () {
    it('supports subtracting days', function () {
      var now = moment('2015-05-05T13:00Z');
      var result = moment(now).relative('-2d');

      assert.ok(result.isSame(moment(now).subtract(2, 'days')));
    });

    it('supports adding days', function () {
      var now = moment('2015-05-05T13:00Z');
      var result = moment(now).relative('2d');

      assert.ok(result.isSame(moment(now).add(2, 'days')));
    });

    it('supports adding minutes', function () {
      var now = moment('2015-05-05T13:00Z');
      var result = moment(now).relative('20m');

      assert.ok(result.isSame(moment(now).add(20, 'minutes')));
    });

    it('supports adding a combination of different units', function () {
      var now = moment('2015-05-05T13:00Z');
      var result = moment(now).relative('2d5h20m');

      assert.ok(result.isSame(moment(now)
        .add(2, 'days')
        .add(5, 'hours')
        .add(20, 'minutes')));
    });

    it('supports subtracting a combination of different units', function () {
      var now = moment('2015-05-05T13:00Z');
      var result = moment(now).relative('-2d5h20m');

      assert.ok(result.isSame(moment(now)
        .subtract(2, 'days')
        .subtract(5, 'hours')
        .subtract(20, 'minutes')));
    });
  });
});
