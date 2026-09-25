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


// Test Cases
console.log(getDayType("Friday"));
console.log(getDayType("Sturday"));
console.log(getDayType("sunday"));
console.log(getDayType("monday"));
console.log(getDayType("TUESDAY"));
console.log(getDayType("wednesDay"))
console.log(getDayType("tuEsday"))
console.log(getDayType("taibe"))
console.log(getDayType("akib"));
