import React, { useState } from "react";
import type { RegisterData } from "../../types/auth";
import { FormField } from "../ui/form";

interface RegisterStepProps {
  onSubmit: (data: RegisterData) => void;
  loading: boolean;
  onSwitchToLogin: () => void;
}

export const RegisterStep: React.FC<RegisterStepProps> = ({
  onSubmit,
  loading,
  onSwitchToLogin,
}) => {
  const [formData, setFormData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter your full name"
      />

      <FormField
        label="Email Address"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter your email"
      />

      <FormField
        label="Password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        placeholder="Enter your password"
      />

      <FormField
        label=" Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        placeholder="Confirm your password"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full  bg-linear-to-r from-purple-600 to-pink-600 text-white  hover:from-purple-700 hover:to-pink-700 py-3 px-4 rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <div className="text-center">
        <p className="text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </form>
  );
};
