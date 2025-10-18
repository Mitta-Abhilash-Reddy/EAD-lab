import { useState } from "react";

const strengthLabels = [
  { label: "Very Weak", color: "red" },
  { label: "Weak", color: "orange" },
  { label: "Moderate", color: "goldenrod" },
  { label: "Strong", color: "green" },
  { label: "Very Strong", color: "darkgreen" },
];

function getPasswordStrength(password) {
  let score = 0;

  if (!password) return 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

  return Math.min(score, 5);
}

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const strength = getPasswordStrength(password);

  const currentStrength = strengthLabels[strength - 1];

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          fontSize: 16,
          marginBottom: 10,
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          height: 10,
          backgroundColor: "#ddd",
          borderRadius: 5,
          marginBottom: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(strength / 5) * 100}%`,
            height: "100%",
            backgroundColor: currentStrength?.color || "transparent",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <p
        style={{
          color: currentStrength?.color || "black",
          fontWeight: "bold",
          minHeight: 24,
        }}
      >
        {currentStrength?.label || "Enter password"}
      </p>
    </div>
  );
}
