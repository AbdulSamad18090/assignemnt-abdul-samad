import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";

const RepositoriesPage = () => {
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

  return (
    <div className="h-screen w-full flex">
      <section>
        <SideNav />
      </section>
      <section></section>
    </div>
  );
};

export default RepositoriesPage;
