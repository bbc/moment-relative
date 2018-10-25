const moment = require('moment');
const fromRegex = /^-?(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;

moment.fn.relative = function (string) {
  const isNegative = string.indexOf('-') !== -1;
  const duration = parseDuration(string);

  if (isNegative) {
    this.subtract(duration);
  } else {
    this.add(duration);
  }
  return this;
};

function parseDuration(string) {
  const matches = string.match(fromRegex);
  const days = parseInt(matches[1]);
  const hours = parseInt(matches[2]);
  const minutes = parseInt(matches[3]);
  const seconds = parseInt(matches[4]);
  const duration = moment.duration({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });
  return duration;
}

module.exports = moment;
