import React, { useState } from "react";
import { FaGitlab } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im"; // Import spinner for loading effect
import Alert from "../../../components/alert/Alert";
import { useNavigate } from "react-router-dom";

const SelfHostedForm = () => {
  const [loadingButton, setLoadingButton] = useState(null); // Track the loading button
  const [showAlert, setShowAlert] = useState(false); // To toggle alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // Store the alert message
  const [alertType, setAlertType] = useState(""); // Store the alert type (success/error/info)
  const navigate = useNavigate();

  // Simulate the sign-in process
  const handleSignIn = (platform) => {
    setLoadingButton(platform); // Set the clicked platform as the loading button

    // Simulate an API call or some async task
    setTimeout(() => {
      setLoadingButton(null); // Reset the loading state after the task is complete
      const successMessage = `Successfully signed in with ${platform}!`;
      setAlertMessage(successMessage); // Set the success message
      setAlertType("success"); // Set alert type to success
      setShowAlert(true); // Show the alert

      setTimeout(() => {
        setShowAlert(false); // Hide alert after 3 seconds
        navigate("/repositories"); // Redirect to repositories
      }, 1000);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <form className="w-full space-y-3 mt-6 flex flex-col justify-center items-center">
      {showAlert && (
        <Alert
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlert(false)} // Close the alert
        />
      )}

      {/* Self Hosted GitLab */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("Self Hosted GitLab")}
        disabled={loadingButton === "Self Hosted GitLab"}
      >
        {loadingButton === "Self Hosted GitLab" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          <FaGitlab className="text-orange-500 text-xl" />
        )}
        {loadingButton === "Self Hosted GitLab"
          ? "Signing in..."
          : "Self Hosted GitLab"}
      </button>

      {/* Sign in with SSO */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("SSO")}
        disabled={loadingButton === "SSO"}
      >
        {loadingButton === "SSO" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          <IoKeyOutline className="text-xl" />
        )}
        {loadingButton === "SSO" ? "Signing in..." : "Sign in with SSO"}
      </button>
    </form>
  );
};

export default SelfHostedForm;
