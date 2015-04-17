function atv(e, a) {
  if (e == null) {return null;}
  var atr = e.attr(a);
  if (atr == null) {return null;}
  return atr.value();
}

var months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

exports.monthName = function(d) {
  return months[d.getMonth()];
}

exports.monthNumber = function(m) {
  if (m instanceof Date) {
    m = m.getMonth();
  }
  return months.indexOf(m);
}

function pad2(v) {
  return ("0"+v).slice(-2);
}

exports.isoDate = function(e) {
  var year, month, day;
  if (e instanceof Date) {
    year = e.getUTCFullYear();
    month = e.getUTCMonth()+1;
    day = e.getUTCDate();
  } else {
    var now = new Date();
    year = atv(e, 'year') || now.getUTCFullYear();
    month = atv(e, 'month');
    if (month == null) {
      month = now.getUTCMonth()+1
    } else {
      var m = months.indexOf(month);
      if (m >= 0) {
        month = m+1;
      }
    }
    day = atv(e, 'day') || now.getUTCDate();
  }
  return "" + year + "-" + pad2(month) + "-" + pad2(day);
};

exports.isoDateTime = function(d) {
  if (d == null) {
    d = new Date();
  }
  return exports.isoDate(d) + "T" + pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes()) + ":" + pad2(d.getUTCSeconds()) + "Z";
};
