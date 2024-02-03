import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import Payment from "./Payment";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    houseNumber: "",
    streetName: "",
    city: "",
    state: "",
    pincode: "",
  });
  const formTitles = ["Personal Details", "Address", "Payment"];

  const PageDisplay = () => {
    if (page === 0)
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    else if (page === 1)
      return <Address formData={formData} setFormData={setFormData} />;
    else return <Payment />;
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            background: "rgb(255, 0, 140)",
            color: "rgb(255, 0, 140)",
            borderRadius: "20px",
          }}
        >text</div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClickCapture={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === formTitles.length - 1) {
                alert("Form Submitted");
                console.log(formData);
              } else setPage((currPage) => currPage + 1);
            }}
          >
            {page === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
