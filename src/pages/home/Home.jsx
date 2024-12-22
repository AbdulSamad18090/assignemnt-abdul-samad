import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link to="/auth">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all">Go to Auth Page</button>
      </Link>
    </div>
  );
};

export default Home;
