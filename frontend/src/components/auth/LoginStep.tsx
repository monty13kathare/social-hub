import React, { useState } from "react";
import type { LoginData } from "../../types/auth";
import { FormField } from "../ui/form";

interface LoginStepProps {
  onSubmit: (data: LoginData) => void;
  loading: boolean;
  onSwitchToRegister: () => void;
}

export const LoginStep: React.FC<LoginStepProps> = ({
  onSubmit,
  loading,
  onSwitchToRegister,
}) => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white  hover:from-purple-700 hover:to-pink-700 py-3 px-4 rounded-lg  focus:ring-2  focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <div className="text-center">
        <p className="text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className=" text-pink-600 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </form>
  );
};
