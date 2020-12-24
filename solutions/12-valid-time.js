function validTime(str) {
  if (typeof str !== 'string' || !str.includes(':')) {
    return false;
  }
  let [hour, minutes] = str.trim().split(':');
  hour = hour.trim();
  minutes = minutes.trim();
  if (/\D/.test(hour) || /\D/.test(minutes)) {
    return false;
  }
  hour = parseInt(hour, 10);
  minutes = parseInt(minutes, 10);
  return hour >= 0 && hour < 24 && minutes >= 0 && minutes < 60;
}

module.exports = { validTime };
