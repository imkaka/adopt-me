import React from "react";

function BreedForm({ breeds, setBreed }) {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="breed">Select Breed</label>
          <select
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            className="form-control"
            id="breed"
          >
            {breeds.map((breed, index) => (
              <option key={index}>{breed}</option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}

export default BreedForm;
