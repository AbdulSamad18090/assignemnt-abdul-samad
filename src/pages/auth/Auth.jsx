import React, { useState } from "react";
import SaasForm from "./components/SaasForm";
import SelfHostedForm from "./components/SelfHostedForm";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2">
      <section className="relative w-full h-full hidden md:flex items-center justify-center bg-white">
        <img
          src="/images/Group 37111.png"
          alt="img"
          className="z-10"
          width={"474"}
          height={322}
        />
        <img
          src="/images/Subtract.png"
          alt="Background decoration"
          className="absolute bottom-0 left-0 opacity-40"
        />
      </section>

      <section className="w-full h-full flex flex-col items-center justify-center bg-[#FAFAFA] border-l p-8">
        <div className="w-full min-h-[450px] bg-white border shadow-sm p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/Frame 10.png"
              alt="CodeAnt Logo"
              className="h-8"
            />
          </div>

          <h2 className="font-semibold text-[32px] text-[#181D27] mt-6">
            Welcome to CodeAnt AI
          </h2>
          {/* Tabs */}
          <div className="w-full flex items-center mt-2 border rounded-lg">
            <button
              className={`rounded w-full h-12 transition-colors font-semibold ${
                activeTab === "SAAS"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`rounded w-full h-12 transition-colors font-semibold ${
                activeTab === "Self Hosted"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>
          {/* Tabs Content */}
          {activeTab === "SAAS" ? <SaasForm /> : <SelfHostedForm />}
        </div>
        <p className="text-sm text-gray-600 mt-6">
          By signing up you agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AuthPage;
