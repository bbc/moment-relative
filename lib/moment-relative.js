var moment = require('moment');
var fromRegex = /^-?(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?$/;
moment.fn.relative = function (string) {
  var isNegative = string.indexOf('-') !== -1;
  var duration = parseDuration(string);

  if (isNegative) {
    this.subtract(duration);
  } else {
    this.add(duration);
  }
  return this;
};

function parseDuration(string) {
  var matches = string.match(fromRegex);
  var days = parseInt(matches[1]);
  var hours = parseInt(matches[2]);
  var minutes = parseInt(matches[3]);
  var duration = moment.duration({
    days: days,
    hours: hours,
    minutes: minutes
  });

  return duration;
}

module.exports = moment;
