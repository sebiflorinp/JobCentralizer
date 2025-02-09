import Sidebar from "../components/Sidebar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";
import JobCardContainer from "../components/JobCardContainer.jsx";

function Jobs() {
  const [searchResult, setSearchResult] = useState([]);
  const [infiniteScrollFilters, setInfiniteScrollFilters] = useState({
    currentPage: 1,
    searchText: "",
    cities: [],
    experience: [],
    sources: [],
    jobTypes: [],
  });

  return (
    <div className="grid grid-cols-10">
      <Sidebar />
      <div className="col-span-6 col-start-4 flex w-full flex-col gap-4">
        <SearchBar
          setSearchResult={setSearchResult}
          setInfiniteScrollFilters={setInfiniteScrollFilters}
        />
        <JobCardContainer
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          infiniteScrollFilters={infiniteScrollFilters}
          setInfiniteScrollFilters={setInfiniteScrollFilters}
        />
      </div>
    </div>
  );
}

export default Jobs;
