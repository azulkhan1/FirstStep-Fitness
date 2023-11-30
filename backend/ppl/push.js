const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getPushWorkout() {
  const pushDay = [];

  const getChestExercises = await getExercisesForBodyPart("chest");
  const chestEx = JSON.parse(getChestExercises);

  while (pushDay.length < 2) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = chestEx[randomIndex];
    if (!pushDay.includes(selectedEx)) {
      pushDay.push(selectedEx);
    }
  }

  const getShoulderExercises = await getExercisesForBodyPart("shoulders");
  const shoulderEx = JSON.parse(getShoulderExercises);

  while (pushDay.length < 4) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = shoulderEx[randomIndex];
    if (!pushDay.includes(selectedEx)) {
      pushDay.push(selectedEx);
    }
  }

  const getUpperArmExercises = await getExercisesForBodyPart("upper%20arms");
  const upperAEx = JSON.parse(getUpperArmExercises);

  while (pushDay.length < 6) {
    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = upperAEx[randomIndex];
    if (!pushDay.includes(selectedEx)) {
      pushDay.push(selectedEx);
    }
  }

  return pushDay;
}

module.exports = { getPushWorkout };
