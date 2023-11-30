require("dotenv").config();

async function getExercisesForBodyPart(bodypart) {
  const url =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" +
    bodypart +
    "?limit=15";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getExercisesForBodyPart };
