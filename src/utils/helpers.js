export const validateInput = (value, label, type) => {
  if (!value) {
    return `${label} is required`;
  }

  if (type === "password") {
    if (value.length < 5) {
      return "Password must be at least 5 characters long";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must include at least one uppercase letter";
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return "Password must include at least one special character(`!@#$%^&*`)";
    }
  }

  if (type === "email") {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }
  }

  if (type === "text" && value.length < 3) {
    return "Name must be at least 3 characters long";
  }

  return true; // Return true if validation passes
};

export function formatObject(obj = {}) {
  if (!obj) return;
  const { _id, __v, profileIcon, createdAt, ...rest } = obj;
  const formattedData = [];

  for (const key in rest) {
    formattedData.push({ key: key, value: rest[key] });
  }

  return formattedData;
}
