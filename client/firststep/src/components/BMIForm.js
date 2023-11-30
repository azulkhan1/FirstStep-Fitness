import React, { useState } from 'react';

function BmiForm() {
  // State variables for each form field and the results
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [fitnessPath, setFitnessPath] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  // Helper function to validate the form
  const validateForm = () => {
    return height && weight && gender && age; // Ensure all fields have values
  };

  // The event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setFormValidated(false); // If the form is not valid, update the formValidated state
      alert('Please fill out all fields correctly.'); // Alert the user to fill all fields
      return; // Stop the handleSubmit function if validation fails
    }

    setFormValidated(true); // If the form passes validation, update the formValidated state

    // Fetch request setup
    try {
      const response = await fetch('http://localhost:5000/bmi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height, weight, gender, age }), // Shorthand property names
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBmiResult(data.bmi);
      setFitnessPath(data.pathway);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  // The JSX for the form
  return (
    <div className='main-container'>
      <form className="form-container" onSubmit={handleSubmit}>

        <div className='form-info'>
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            title="Please enter your height in centimeters." // Custom tooltip on invalid input
          />
        </div>

        <div className='form-info'>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            title="Please enter your weight in kilograms."
          />
        </div>

        <div className='form-info'>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            title="Please select your gender."
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            {/* Add more options here if needed */}
          </select>
        </div>

        <div className='form-info'>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            title="Please enter your age."
          />
        </div>
        <div className='form-info'>
          <button type="submit" disabled={!validateForm()}>Calculate BMI</button>
        </div>
      </form>

      {/* Conditional rendering for displaying validation message */}
      {!formValidated && (
        <p>Please fill in all fields before submitting.</p>
      )}

      {/* Display the result after the form submission */}
      {bmiResult && (
        <div>
          <h2>Your BMI is: {bmiResult}</h2>
          <p>Suggested fitness pathway: {fitnessPath}</p>
        </div>
      )}
    </div>
  );
}

export default BmiForm;
