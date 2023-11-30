const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getFullBodyWorkout() {
  const fullBodyWorkout = [];

  const pushPart = Math.floor(Math.random() * 3) + 1;

  if (pushPart === 1) {
    const getChestExercises = await getExercisesForBodyPart("chest");
    const chestEx = JSON.parse(getChestExercises);

    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = chestEx[randomIndex];

    fullBodyWorkout.push(selectedEx);
  } else if (pushPart === 2) {
    const getShoulderExercises = await getExercisesForBodyPart("shoulders");
    const shoulderEx = JSON.parse(getShoulderExercises);

    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = shoulderEx[randomIndex];

    fullBodyWorkout.push(selectedEx);
  } else {
    const getUpperArmExercises = await getExercisesForBodyPart("upper%20arms");
    const upperAEx = JSON.parse(getUpperArmExercises);

    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = upperAEx[randomIndex];

    fullBodyWorkout.push(selectedEx);
  }

  const pullPart = Math.floor(Math.random() * 2) + 1;

  if (pullPart === 1) {
    const getBackExercises = await getExercisesForBodyPart("back");
    const backEx = JSON.parse(getBackExercises);

    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = backEx[randomIndex];

    fullBodyWorkout.push(selectedEx);
  } else {
    const getLArmsExercises = await getExercisesForBodyPart("lower%20arms");
    const lowerAEx = JSON.parse(getLArmsExercises);

    let randomIndex = Math.floor(Math.random() * 15);
    let selectedEx = lowerAEx[randomIndex];

    fullBodyWorkout.push(selectedEx);
  }

  const getUpperLegExercises = await getExercisesForBodyPart("upper%20legs");
  const upperLegEx = JSON.parse(getUpperLegExercises);

  let randomIndex = Math.floor(Math.random() * 15);
  let selectedEx = upperLegEx[randomIndex];

  fullBodyWorkout.push(selectedEx);

  const getLowerLegExercises = await getExercisesForBodyPart("lower%20legs");
  const lowerLegEx = JSON.parse(getLowerLegExercises);

  let randomIndex2 = Math.floor(Math.random() * 15);
  let selectedEx2 = lowerLegEx[randomIndex2];

  fullBodyWorkout.push(selectedEx2);

  return fullBodyWorkout;
}

module.exports = { getFullBodyWorkout };
