import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Repositories from "./components/Repositories";

const Dashboard = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Function to extract the hash from the URL
    const getHashFromURL = () => {
      const currentHash = window.location.hash; // Get the part after '#'
      setHash(currentHash.replace("#", "")); // Remove the '#' and store the value
    };

    // Call the function on component mount
    getHashFromURL();

    // Optionally, you can add an event listener to update the hash when the URL changes
    window.addEventListener("hashchange", getHashFromURL);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", getHashFromURL);
    };
  }, []);

  console.log("hashchange =>", hash);

  const pages = {
    repositories: <Repositories />,
    reviews: <h1>AI Code Review</h1>,
    security: <h1>Cloud Security</h1>,
    "how-to-use": <h1>How to Use</h1>,
    settings: <h1>Settings</h1>,
  };

  return (
    <div className="h-screen w-full flex">
      {/* SideNav Section */}
      <section>
        <SideNav />
      </section>
      {/* Dynamic Content Area */}
      <section className="md:ml-64 w-full h-screen bg-white p-4 md:mt-0 mt-14">
        {pages[hash]}
      </section>
    </div>
  );
};

export default Dashboard;
