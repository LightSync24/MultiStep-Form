import React from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  return (
    <div className="personal-details-container">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      ></input>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      ></input>
      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      ></input>
      <label>D.O.B</label>
      <input type="date" placeholder="D.O.B"></input>
    </div>
  );
};

export default PersonalDetails;
