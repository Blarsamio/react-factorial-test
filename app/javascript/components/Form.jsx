import React, { useState } from "react";

function MetricForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      metric: {
        name: name,
        value: value,
        date: date
      }
    };

    fetch("/metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // handle successful form submission
      })
      .catch(error => console.error(error));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className = "flex flex-col my-5">
      <label>
        Name:
        <select value={name} onChange={handleNameChange} className="w-full">
          <option value="Ben">Ben</option>
          <option value="Camila">Camila</option>
          <option value="Pato">Pato</option>
          <option value="Santi">Santi</option>
        </select>
      </label>
      <br />
      <label>
        Value:
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          required
          min={0}
        />
      </label>
      <br />
      <label>
        Date:
        <input className="w-full" type="date" value={date} onChange={handleDateChange} required />
      </label>
      <br />
      <button type="submit" className="bg-radical hover:text-radical">Submit</button>
    </form>
  );
}

export default MetricForm;
