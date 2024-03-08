import { useState } from "react";

// Custom hook for managing alert state in a component
const useAlert = () => {
  // State to manage the visibility, text, and type of the alert
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  // Function to show the alert
  const showAlert = ({ text, type = "danger" }) =>
    setAlert({ show: true, text, type });

  // Function to hide the alert
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });
  return { alert, showAlert, hideAlert };
};

export default useAlert;
