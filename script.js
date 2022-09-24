const displayDate = document.querySelectorAll(".button__date_number");
const displayWeek = document.querySelectorAll(".button__date_weekday");

let dateNow = new Date();

function displayWeekDay(date) {
  let days = ["su", "mo", "tu", "we", "th", "fr", "sa"];
  return days[date.getDay()];
}


function displayMonth(date) {
  let months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return months[date.getMonth()];
}

function displayDateWeek(number) {
    displayDate[number].textContent = `${dateNow.getDate()}`;
    displayWeek[number].textContent = `${displayWeekDay(dateNow)}`;
    if (displayWeekDay(dateNow) == "sa" || displayWeekDay(dateNow) == "su") {
      displayWeek[number].style.color = "#f48e21";
    } else {
      displayWeek[number].style.color = "#a9aab1";
    }
}
  
displayDateWeek(0);

for (let i = 1; i < 6; i++) {
    dateNow.setDate(dateNow.getDate() + 1);
    displayDateWeek(i);
}