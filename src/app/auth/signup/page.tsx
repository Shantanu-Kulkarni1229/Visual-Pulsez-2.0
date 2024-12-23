"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    company: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed.");
        return;
      }

      setSuccess(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="p-8 bg-white shadow-md rounded-md w-96"
        onSubmit={handleSignup}
      >
        <h2 className="text-xl font-bold mb-6">Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company/Organization"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleInputChange}
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Signup successful!</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
