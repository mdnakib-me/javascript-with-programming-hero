//questions1 answer 
function describeValue(value) {
  const type = typeof value;

  if (value) {
    return `${type} | truthy`;
  } else {
    return `${type} | falsy`;
  }
}
//question2 with answer 
function getDayType(day) {
  const dayName = day.toLowerCase();
  switch (dayName) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}
//question3 answer 
function validateUsername(username) {
  if (username.length < 4) {
      return "Too Short";
  }else if (username.includes(" ")) {
      return "No Space Allowed";
  }else if (username.toLowerCase().includes("admin")) {
      return "Reserved Word";
  }else {
      return "Available"
  }
}
//question4 answer 
function getCngFare(distance, isNight = false, waitingMinutes=0){
    let fare = 50;
    if (distance > 2){
      fare += (distance - 2) * 15;
    }
      fare += waitingMinutes*2;
    if (isNight) {
      fare *= 1.20;
    }
    return fare;
}
