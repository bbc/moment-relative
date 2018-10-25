const moment = require('..');
const assert = require('assert');

describe('moment-relative', () => {
  describe('.relative', () => {
    it('supports subtracting days', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('-2d');

      assert.ok(result.isSame(moment(now).subtract(2, 'days')));
    });

    it('supports adding days', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('2d');

      assert.ok(result.isSame(moment(now).add(2, 'days')));
    });

    it('supports adding minutes', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('20m');

      assert.ok(result.isSame(moment(now).add(20, 'minutes')));
    });

    it('supports adding seconds', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('15s');

      assert.ok(result.isSame(moment(now).add(15, 'seconds')));
    });

    it('supports adding a combination of different units', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('2d5h20m15s');

      assert.ok(result.isSame(moment(now)
        .add(2, 'days')
        .add(5, 'hours')
        .add(20, 'minutes')
        .add(15, 'seconds')));
    });

    it('supports subtracting a combination of different units', () => {
      const now = moment('2015-05-05T13:00Z');
      const result = moment(now).relative('-2d5h20m15s');

      assert.ok(result.isSame(moment(now)
        .subtract(2, 'days')
        .subtract(5, 'hours')
        .subtract(20, 'minutes')
        .subtract(15, 'seconds')));
    });
  });
});
