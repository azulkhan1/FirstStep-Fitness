const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getLegWorkout() {
  const legDay = [];

  const getUpperLegExercises = await getExercisesForBodyPart("upper%20legs");
  const upperLegEx = JSON.parse(getUpperLegExercises);

  while (legDay.length < 3) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = upperLegEx[randomIndex];
    if (!legDay.includes(selectedEx)) {
      legDay.push(selectedEx);
    }
  }

  const getLowerLegExercises = await getExercisesForBodyPart("lower%20legs");
  const lowerLegEx = JSON.parse(getLowerLegExercises);

  while (legDay.length < 6) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = lowerLegEx[randomIndex];
    if (!legDay.includes(selectedEx)) {
      legDay.push(selectedEx);
    }
  }

  return legDay;
}

module.exports = { getLegWorkout };
