import Sidebar from "../components/Sidebar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useState } from "react";
import JobCard from "../components/JobCard.jsx";
import JobCardContainer from "../components/JobCardContainer.jsx";

function Jobs() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="col-span-full row-span-full row-start-2 grid grid-cols-12 grid-rows-12">
      <Sidebar />
      <div className="bg col-span-7 col-start-5 row-span-full row-start-1 flex flex-col gap-4">
        <SearchBar setSearchResult={setSearchResult} />
        <JobCardContainer searchResult={searchResult} />
      </div>
    </div>
  );
}

export default Jobs;
