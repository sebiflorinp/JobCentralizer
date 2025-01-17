import { useEffect, useState } from "react";
import useSearchJobs from "../hooks/useSearchJobs.jsx";

function SearchBar({ setSearchResult }) {
  const [jobTitle, setJobTitle] = useState("");
  const { queryResult, fetchJobs } = useSearchJobs();

  const handleSearch = async () => {
    await fetchJobs(jobTitle);
    console.log(queryResult);
    setSearchResult(queryResult);
  };

  return (
    <div className="flex gap-5 pt-7">
      <input
        className="block w-full rounded-md border-2 border-blue-400 bg-blue-50 p-1 text-xl shadow-md outline-none focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => setJobTitle(e.target.value)}
        type="text"
      />
      <button
        className={"rounded-lg bg-blue-600 p-2 px-7 text-xl text-white"}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
