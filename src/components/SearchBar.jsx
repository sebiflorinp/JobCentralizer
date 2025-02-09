import { useEffect, useState } from "react";
import useSearchJobs from "../hooks/useSearchJobs.jsx";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

function SearchBar({ setSearchResult, setInfiniteScrollFilters }) {
  const [jobTitle, setJobTitle] = useState("");
  const { queryResult, fetchJobs } = useSearchJobs();
  const filters = useSelector((state) => state.filter);

  const handleSearch = async () => {
    await fetchJobs(jobTitle);

    const updatedFilters = {
      ...filters,
      searchText: jobTitle,
      currentPage: 1,
    };

    setInfiniteScrollFilters(updatedFilters);
    setSearchResult(queryResult);
  };

  useEffect(() => {
    setSearchResult(queryResult);
  }, [queryResult]);

  return (
    <div className="flex gap-5 pt-7">
      <input
        className="block w-full rounded-md border-2 border-blue-400 bg-blue-50 p-1 pl-2 text-xl shadow-md outline-none focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => setJobTitle(e.target.value)}
        type="text"
      />
      <motion.button
        className={
          "rounded-lg bg-blue-600 p-2 px-7 text-xl text-white hover:bg-blue-700 active:bg-blue-500"
        }
        onClick={handleSearch}
        whileTap={{ scale: 0.9 }}
      >
        Search
      </motion.button>
    </div>
  );
}

export default SearchBar;
