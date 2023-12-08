import React, { useState } from "react";

function GetBMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/bmi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ height, weight }),
      });
      const result = await response.json();
      const data = JSON.parse(result.getBmi);
      console.log(data);
      setBmi(data.bmi);
      console.log(bmi);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Pounds (lb):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <button type="submit">Calculate BMI</button>
      </form>
      <p>Your BMI is: {bmi}</p>
    </div>
  );
}

export default GetBMI;
