const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getLowerWorkout() {
  const lowerWorkout = [];

  const getUpperLegExercises = await getExercisesForBodyPart("upper%20legs");
  const upperLegEx = JSON.parse(getUpperLegExercises);

  while (lowerWorkout.length < 3) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = upperLegEx[randomIndex];
    if (!lowerWorkout.includes(selectedEx)) {
      lowerWorkout.push(selectedEx);
    }
  }

  const getLowerLegExercises = await getExercisesForBodyPart("lower%20legs");
  const lowerLegEx = JSON.parse(getLowerLegExercises);

  while (lowerWorkout.length < 6) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = lowerLegEx[randomIndex];
    if (!lowerWorkout.includes(selectedEx)) {
      lowerWorkout.push(selectedEx);
    }
  }

  return lowerWorkout;
}

module.exports = { getLowerWorkout };
