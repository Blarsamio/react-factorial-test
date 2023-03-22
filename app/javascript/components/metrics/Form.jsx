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
    <form onSubmit={handleSubmit} className = "flex flex-row mt-20 w-full h-20 px-3 justify-between overflow-hidden">
        <select value={name} onChange={handleNameChange} className="text-gray-400 h-10 self-center" placeholder="John">
          <option value="Ben">Ben</option>
          <option value="Camila">Camila</option>
          <option value="Pato">Pato</option>
          <option value="Santi">Santi</option>
        </select>
      <br />

        <input
          className="text-black placeholder:text-gray-400 h-10 self-center"
          type="number"
          value={value}
          onChange={handleValueChange}
          required
          min={0}
          placeholder="Value"
        />
      <br />

        <input className="text-gray-400 h-10 self-center" type="date" value={date} onChange={handleDateChange} required />
      <br />
      <button type="submit" className="btn2 w-40 mt-0 h-10 bg-radical hover:text-white self-center">Submit</button>
    </form>
  );
}

export default MetricForm;
