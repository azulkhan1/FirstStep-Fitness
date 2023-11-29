async function getExercisesForBodyPart(bodypart) {
  const url =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/" +
    bodypart +
    "?limit=8";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "89cc912337msh09985de479aa03bp1c55adjsn0eb65144131c",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getExercisesForBodyPart };
