import React from "react";

const Address = ({ formData, setFormData }) => {
  return (
    <div className="address-container">
      <input
        type="text"
        placeholder="House Number"
        value={formData.houseNumber}
        onChange={(e) =>
          setFormData({ ...formData, houseNumber: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Street Name"
        value={formData.streetName}
        onChange={(e) =>
          setFormData({ ...formData, streetName: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="State/Province"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      ></input>
      <input
        type="number"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
      ></input>
    </div>
  );
};

export default Address;
