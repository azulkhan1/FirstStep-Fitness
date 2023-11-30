const { getExercisesForBodyPart } = require("../excersiceDBApi");

async function getUpperWorkout() {
  const upperWorkout = [];

  while (upperWorkout.length < 3) {
    const pushPart = Math.floor(Math.random() * 3) + 1;

    if (pushPart === 1) {
      const getChestExercises = await getExercisesForBodyPart("chest");
      const chestEx = JSON.parse(getChestExercises);

      let randomIndex = Math.floor(Math.random() * 15);
      let selectedEx = chestEx[randomIndex];

      upperWorkout.push(selectedEx);
    } else if (pushPart === 2) {
      const getShoulderExercises = await getExercisesForBodyPart("shoulders");
      const shoulderEx = JSON.parse(getShoulderExercises);

      let randomIndex = Math.floor(Math.random() * 15);
      let selectedEx = shoulderEx[randomIndex];

      upperWorkout.push(selectedEx);
    } else {
      const getUpperArmExercises = await getExercisesForBodyPart(
        "upper%20arms"
      );
      const upperAEx = JSON.parse(getUpperArmExercises);

      let randomIndex = Math.floor(Math.random() * 15);
      let selectedEx = upperAEx[randomIndex];

      upperWorkout.push(selectedEx);
    }
  }

  while (upperWorkout.length < 6) {
    const pullPart = Math.floor(Math.random() * 2) + 1;

    if (pullPart === 1) {
      const getBackExercises = await getExercisesForBodyPart("back");
      const backEx = JSON.parse(getBackExercises);

      let randomIndex = Math.floor(Math.random() * 15);
      let selectedEx = backEx[randomIndex];

      upperWorkout.push(selectedEx);
    } else {
      const getLArmsExercises = await getExercisesForBodyPart("lower%20arms");
      const lowerAEx = JSON.parse(getLArmsExercises);

      let randomIndex = Math.floor(Math.random() * 15);
      let selectedEx = lowerAEx[randomIndex];

      upperWorkout.push(selectedEx);
    }
  }

  return upperWorkout;
}

module.exports = { getUpperWorkout };
