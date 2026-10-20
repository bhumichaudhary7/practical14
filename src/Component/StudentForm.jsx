import React, { useState } from "react";

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    gender: ""
  });

  const [student, setStudent] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent(form);
  };

  return (
    <div className="form-card">
      <h1>Student Registration</h1>
      <p className="subtitle">Fill in your details below</p>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name}
          onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email Address"
          value={form.email} onChange={handleChange} required />

        <select name="course" value={form.course}
          onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="MCA">MCA</option>
        </select>

        <select name="gender" value={form.gender}
          onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Register Student</button>
      </form>

      {student && (
        <div className="result">
          <h2>Registration Successful!</h2>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Gender:</b> {student.gender}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;