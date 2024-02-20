import axios from "axios";
import { useState } from "react";

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/my-budget/users",
        formData
      );
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h1> Enter User Details Below </h1>
      <form className="form-component" onSubmit={handleSubmit}>
        <label className="labels">
          Username:
          <input
            className="user-detail-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="labels">
          Email:
          <input
            className="user-detail-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* File upload input */}
        <label className="labels">
          Select File:
          <input
            type="file"
            name="file"
            accept="*.csv *.pdf" // Specify accepted file types if needed
            onChange={handleChange}
          />
        </label>
        <button className="button-submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default UserDetailsForm;
