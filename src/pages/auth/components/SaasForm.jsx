import React, { useState } from "react";
import { FaBitbucket, FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { ImSpinner8 } from "react-icons/im";
import { VscAzureDevops } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/alert/Alert";

const SaasForm = () => {
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

      {/* GitHub */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("GitHub")}
        disabled={loadingButton === "GitHub"}
      >
        {loadingButton === "GitHub" ? (
          <div className="loader"></div> // Loader on clicked button
        ) : (
          <FaGithub className="text-xl" />
        )}
        {loadingButton === "GitHub" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          "Sign in with Github"
        )}
      </button>

      {/* Bitbucket */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("Bitbucket")}
        disabled={loadingButton === "Bitbucket"}
      >
        {loadingButton === "Bitbucket" ? (
          <div className="loader"></div>
        ) : (
          <FaBitbucket className="text-xl text-blue-500" />
        )}
        {loadingButton === "Bitbucket" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          "Sign in with Bitbucket"
        )}
      </button>

      {/* Azure DevOps */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("Azure DevOps")}
        disabled={loadingButton === "Azure DevOps"}
      >
        {loadingButton === "Azure DevOps" ? (
          <div className="loader"></div>
        ) : (
          <VscAzureDevops className="text-xl text-blue-600" />
        )}
        {loadingButton === "Azure DevOps" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          "Sign in with Azure DevOps"
        )}
      </button>

      {/* GitLab */}
      <button
        className="w-2/3 h-12 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors disabled:cursor-not-allowed"
        onClick={() => handleSignIn("GitLab")}
        disabled={loadingButton === "GitLab"}
      >
        {loadingButton === "GitLab" ? (
          <div className="loader"></div>
        ) : (
          <FaGitlab className="text-orange-500 text-xl" />
        )}
        {loadingButton === "GitLab" ? (
          <ImSpinner8 className="animate-spin" />
        ) : (
          "Sign in with GitLab"
        )}
      </button>
    </form>
  );
};

export default SaasForm;
