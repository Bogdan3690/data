function currentData() {
  const date = new Date();
  console.log(date);
  return date;
}

currentData();

function getYear(date) {
  console.dir(date);
  const year = date.getFullYear();
  console.log(year);
  return year;
}

getYear(new Date(2026, 6, 7, 12, 36));
getYear(new Date("2026-07-13"));
getYear(new Date("March/2026/13"));

function getMonth(date) {
  const month = date.getMonth();
  console.log(month);
  return month;
}

getMonth(new Date());

function isWeekend(date) {
  const day = date.getDay();
  console.log(day);

  if (day === 0 || day === 6) {
    return "is Weekend";
  }
  return "is work day";
}

const weekend = isWeekend(new Date());
console.log(weekend);

function getDaysDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = d2 - d1;
  console.log(diff);
}

getDaysDifference(new Date("March 4, 2025"), new Date("March 4, 2026"));

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  console.log(d);

  return d;
}

addDays(new Date(), 5);
