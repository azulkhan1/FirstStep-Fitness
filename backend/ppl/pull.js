const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getPullWorkout() {
  const pullDay = [];

  const getBackExercises = await getExercisesForBodyPart("back");
  const backEx = JSON.parse(getBackExercises);

  while (pullDay.length < 3) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = backEx[randomIndex];
    if (!pullDay.includes(selectedEx)) {
      pullDay.push(selectedEx);
    }
  }

  const getLArmsExercises = await getExercisesForBodyPart("lower%20arms");
  const lowerAEx = JSON.parse(getLArmsExercises);

  while (pullDay.length < 6) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = lowerAEx[randomIndex];
    if (!pullDay.includes(selectedEx)) {
      pullDay.push(selectedEx);
    }
  }

  return pullDay;
}

module.exports = { getPullWorkout };
