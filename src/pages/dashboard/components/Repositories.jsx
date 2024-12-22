import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaDatabase, FaPlus } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import RepositoriesData from "../../../lib/JsonData/Repositories.json";
import { GoDotFill } from "react-icons/go";

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter repositories based on search query
  const filteredRepositories = RepositoriesData.repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to calculate the time difference between now and the last updated time
  function timeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    // Calculate the difference in time
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    // Return the result as "Updated X days ago"
    return `Updated ${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }

  return (
    <div className="h-full">
      {/* Header */}
      <header className="border-b pb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-neutral-600 text-sm">
              {filteredRepositories.length} Total Repositories
            </p>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <button className="flex items-center gap-1 p-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-all text-sm shadow-sm">
              <SlRefresh className="text-lg" />
              Refresh All
            </button>
            <button className="flex items-center gap-1 p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all text-sm text-white shadow-sm">
              <FaPlus className="text-lg" />
              Add Repository
            </button>
          </div>
        </div>
        <div className="border border-neutral-300 shadow-sm sm:w-1/3 w-full rounded-lg mt-4 p-2 flex items-center gap-2">
          <CiSearch className="text-xl" />
          <input
            type="search"
            placeholder="Search Repositories"
            className="w-full focus:outline-none placeholder:text-sm text-sm bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
          />
        </div>
      </header>

      {/* Repository List */}
      <div className="mt-4 h-[calc(100vh-160px)] custom-scrollbar overflow-y-auto">
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repo) => (
            <div
              key={repo.name}
              className="border-b p-2 hover:bg-neutral-100 transition-all rounded"
            >
              <span className="flex items-center gap-2">
                <h1 className="font-semibold">{repo.name}</h1>{" "}
                <p className="bg-blue-50 border border-blue-500 text-blue-500 text-xs px-1 rounded-full">
                  {repo.status}
                </p>
              </span>
              <div className="flex items-center gap-8 flex-wrap mt-2">
                <p className="flex items-center gap-1 text-neutral-600 text-sm">
                  {repo.language}
                  <GoDotFill className="text-blue-600" />
                </p>
                <p className="flex items-center gap-1 text-neutral-600 text-sm">
                  <FaDatabase className="text-xs" />
                  {repo.size} KB
                </p>
                <p className="flex items-center gap-1 text-neutral-600 text-sm">
                  {timeAgo(repo.lastModified)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-neutral-600">No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default Repositories;
