import useSearchJobs from "../hooks/useSearchJobs.jsx";
import JobCard from "./JobCard.jsx";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function JobCardContainer({ searchResult, setSearchResult }) {
  const { fetchJobs, fetchMoreJobs, isLoading, queryResult } = useSearchJobs();

  useEffect(() => {
    fetchJobs("");
  }, []);

  useEffect(() => {
    setSearchResult(queryResult);
  }, [queryResult]);

  return (
    <InfiniteScroll
      dataLength={searchResult.length}
      next={fetchMoreJobs}
      hasMore={!isLoading}
      loader={<p>Loading...</p>}
    >
      <div className={"flex flex-col gap-4"}>
        {searchResult.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default JobCardContainer;
