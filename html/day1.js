function check() {
  const dayElement = document.getElementById("getday");
  const resultElement = document.getElementById("result");
  switch (dayElement.value.toLowerCase()) {
    case "sunday":
    case "friday":
    case "saturday":
      resultElement.innerHTML = "WEEKEND!!";
      break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      resultElement.innerHTML = "WEEKDAY!!";
      break;

    default:
      resultElement.innerHTML = "invalid day!";
  }
  dayElement.value = "";
}
