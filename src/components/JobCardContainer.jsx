import useSearchJobs from "../hooks/useSearchJobs.jsx";
import JobCard from "./JobCard.jsx";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function JobCardContainer({
  searchResult,
  setSearchResult,
  infiniteScrollFilters,
  setInfiniteScrollFilters,
}) {
  const { fetchJobs, fetchMoreJobs, isLoading, queryResult } = useSearchJobs();

  useEffect(() => {
    fetchJobs("");
  }, []);

  useEffect(() => {
    setSearchResult(queryResult);
  }, [queryResult]);

  const fetchJobsInfiniteScroll = async () => {
    const updatedFilters = {
      ...infiniteScrollFilters,
      currentPage: infiniteScrollFilters.currentPage + 1,
    };
    setInfiniteScrollFilters(updatedFilters);

    const newJobs = await fetchMoreJobs(updatedFilters);
    console.log(queryResult);

    setSearchResult((prevState) => [...prevState, ...newJobs]);
  };

  return (
    <InfiniteScroll
      dataLength={searchResult.length}
      next={fetchJobsInfiniteScroll}
      hasMore={!isLoading}
    >
      <div className={"flex flex-col gap-4 pb-7"}>
        {searchResult.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default JobCardContainer;
