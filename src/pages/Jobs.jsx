import Sidebar from "../components/Sidebar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";
import JobCardContainer from "../components/JobCardContainer.jsx";

function Jobs() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="grid grid-cols-10">
      <Sidebar />
      <div className="col-span-6 col-start-4 flex w-full flex-col gap-4">
        <SearchBar setSearchResult={setSearchResult} />
        <JobCardContainer
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </div>
    </div>
  );
}

export default Jobs;
