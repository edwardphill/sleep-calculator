const getSleepHours = day => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 9;
  } else if (day === "friday") {
    return 6;
  } else if (day === "saturday") {
    return 10;
  } else {
    return 9;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log("I got " + getActualSleepHours() + " hours of sleep");
console.log(getIdealSleepHours() + " is my ideal number of sleep hours.");
const calculateSleepDebt = () => {
  actualSleepHours;
  idealSleepHours;
};

const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log(
    `You got the perfect amount of sleep. You got ${$getActual} hours of sleep this week.`
  );
} else if (actualSleepHours > idealSleepHours) {
  console.log(`You got more than enough sleep this week!`);
} else if (actualSleepHours > idealSleepHours) {
  console.log(
    `Not enough sleep this week! You got ${$getActual} hours of sleep`
  );
} else {
  console.log("error");
}
