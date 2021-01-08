const CryptoJS = require("crypto-js");
const MD5 = require("crypto-js/md5");

// 拼多多应用client_secret
const SECRET = "c0df55933e3a536b29c591c3a3174a9a547e09ea";
// 拼多多应用client_id
const CLIENTID = "b5432def23434f2a8456ea3eaabb9f06";
// 拼多多推广位PID
const PDDPID = "2028218_185112413";

function sign(params) {
  var sorted = Object.keys(params).sort();
  var basestring = SECRET;
  for (var i = 0, l = sorted.length; i < l; i++) {
    var k = sorted[i];
    basestring += k + params[k];
  }
  // console.log(params)
  basestring += SECRET;
  console.log("basestring ==>", basestring);
  return md5(basestring).toUpperCase();
}

function timestamp() {
  return parseInt(new Date().getTime() / 1000);
}

function md5(s) {
  return MD5(s).toString(CryptoJS.enc.Hex);
}

function YYYYMMDDHHmmss(d, options) {
  d = d || new Date();
  if (!(d instanceof Date)) {
    d = new Date(d);
  }

  var dateSep = "-";
  var timeSep = ":";
  if (options) {
    if (options.dateSep) {
      dateSep = options.dateSep;
    }
    if (options.timeSep) {
      timeSep = options.timeSep;
    }
  }
  var date = d.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  var month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var hours = d.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var mintues = d.getMinutes();
  if (mintues < 10) {
    mintues = "0" + mintues;
  }
  var seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    d.getFullYear() +
    dateSep +
    month +
    dateSep +
    date +
    " " +
    hours +
    timeSep +
    mintues +
    timeSep +
    seconds
  );
}

module.exports = {
  md5,
  YYYYMMDDHHmmss,
  sign,
  timestamp,
  CLIENTID,
  PDDPID,
};
